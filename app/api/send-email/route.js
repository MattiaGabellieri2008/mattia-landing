import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return entities[character];
  });

const formatValue = (value) =>
  Array.isArray(value) ? value.map(escapeHtml).join(', ') : escapeHtml(value);

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'Il servizio email non è configurato.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Il corpo della richiesta non è valido.' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, error: 'I dati della richiesta non sono validi.' },
      { status: 400 }
    );
  }

  const {
    clientName,
    companyName,
    clientEmail,
    phone,
    preferredContactMethod,
    clientProfile,
    projectType,
    targetPlatforms,
    budgetTier,
    projectStage,
    timeline,
    collaborationMode,
    selectedFeatures,
    description
  } = body;

  if (
    typeof clientName !== 'string' ||
    !clientName.trim() ||
    typeof clientEmail !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail) ||
    typeof description !== 'string' ||
    !description.trim()
  ) {
    return NextResponse.json(
      { success: false, error: 'Nome, email e descrizione del progetto sono obbligatori.' },
      { status: 400 }
    );
  }

  const details = [
    ['Profilo cliente', clientProfile],
    ['Tipologia di progetto', projectType],
    ['Piattaforme target', targetPlatforms],
    ['Fascia di budget', budgetTier],
    ['Stato del progetto', projectStage],
    ['Tempistiche', timeline],
    ['Formula di collaborazione', collaborationMode],
    ['Funzionalità selezionate', selectedFeatures],
    ['Canale di ricontatto preferito', preferredContactMethod]
  ];

  const subjectName = clientName.replace(/[\r\n]/g, ' ').trim();
  const subjectCompany = String(companyName || 'Privato')
    .replace(/[\r\n]/g, ' ')
    .trim();

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Landing <onboarding@resend.dev>',
      to: ['mattiagabellieri2008@gmail.com'],
      replyTo: clientEmail,
      subject: `Nuovo contatto progetto da ${subjectName} (${subjectCompany})`,
      html: `
        <div style="font-family: monospace; background: #f4f4f4; padding: 20px; color: #111;">
          <h2 style="background: #FFE600; padding: 10px; border: 2px solid #111;">NUOVA RICHIESTA DAL CONFIGURATORE</h2>
          <p><strong>Nome / referente:</strong> ${escapeHtml(clientName)}</p>
          <p><strong>Email cliente:</strong> ${escapeHtml(clientEmail)}</p>
          <p><strong>Azienda / attività:</strong> ${escapeHtml(companyName || 'Non specificata')}</p>
          <p><strong>Telefono / contatto:</strong> ${escapeHtml(phone || 'Non specificato')}</p>
          <hr style="border: 1px solid #111;" />
          ${details
            .map(
              ([label, value]) =>
                `<p><strong>${label}:</strong> ${formatValue(value) || 'Non specificato'}</p>`
            )
            .join('')}
          <hr style="border: 1px solid #111;" />
          <p><strong>Descrizione del progetto:</strong><br/>${escapeHtml(description).replace(/\n/g, '<br/>')}</p>
        </div>
      `
    });

    if (error) {
      console.error('Resend could not send the project inquiry:', error);
      return NextResponse.json(
        { success: false, error: 'Non è stato possibile inviare la richiesta email.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send the project inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Si è verificato un errore durante l’invio della richiesta.' },
      { status: 500 }
    );
  }
}

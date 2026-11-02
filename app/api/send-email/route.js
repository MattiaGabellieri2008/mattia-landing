import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { clientType, projectType, budget, timeline, features, contactMethod, name, email, company, phone, message } = body;

    const data = await resend.emails.send({
      from: 'Portfolio Landing <onboarding@resend.dev>',
      to: ['mattiagabellieri2008@gmail.com'],
      subject: `🚀 Nuovo Contatto Progetto da ${name} (${company || 'Privato'})`,
      html: `
        <div style="font-family: monospace; background: #f4f4f4; padding: 20px; color: #111;">
          <h2 style="background: #FFE600; padding: 10px; border: 2px solid #111;">NUOVA RICHIESTA DAL CONFIGURATORE</h2>
          <p><strong>Nome / Referente:</strong> ${name}</p>
          <p><strong>Email Cliente:</strong> ${email}</p>
          <p><strong>Azienda / Nome Attività:</strong> ${company || 'N/D'}</p>
          <p><strong>Telefono / Contatto:</strong> ${phone || 'N/D'}</p>
          <hr style="border: 1px solid #111;" />
          <p><strong>1. Profilo Cliente:</strong> ${clientType}</p>
          <p><strong>2. Tipologia Progetto:</strong> ${projectType}</p>
          <p><strong>3. Fascia di Budget:</strong> ${budget}</p>
          <p><strong>4. Tempistiche:</strong> ${timeline}</p>
          <p><strong>5. Moduli / Funzionalità:</strong> ${Array.isArray(features) ? features.join(', ') : features}</p>
          <p><strong>Canale Preferito:</strong> ${contactMethod}</p>
          <hr style="border: 1px solid #111;" />
          <p><strong>Messaggio / Note Aggiuntive:</strong><br/>${message || 'Nessun messaggio aggiuntivo.'}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
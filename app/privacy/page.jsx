import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Mattia Gabellieri',
  description:
    'Informativa sul trattamento dei dati personali inviati tramite il configuratore di progetto.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] px-4 py-10 text-[#111111] sm:py-16">
      <article className="mx-auto max-w-3xl border-4 border-[#111111] bg-white p-6 shadow-[8px_8px_0px_#111111] sm:p-10">
        <Link
          href="/"
          className="font-mono-code text-xs font-extrabold uppercase underline underline-offset-4"
        >
          ← Torna alla home
        </Link>

        <h1 className="mt-8 font-display text-3xl font-extrabold uppercase sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono-code text-sm font-bold">
          Informativa sul trattamento dei dati personali inviati tramite il
          configuratore di progetto.
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 sm:text-base">
          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              Titolare del trattamento
            </h2>
            <p className="mt-2">
              Il Titolare del trattamento è <strong>Mattia Gabellieri</strong>.
              Per informazioni o per esercitare i tuoi diritti puoi scrivere a{' '}
              <a
                className="font-bold underline underline-offset-2"
                href="mailto:mattiagabellieri2008@gmail.com"
              >
                mattiagabellieri2008@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              Dati trattati e finalità
            </h2>
            <p className="mt-2">
              Quando invii una richiesta tramite il configuratore possono essere
              trattati i dati che inserisci, come nome, email, azienda,
              telefono, preferenze relative al progetto e il testo del messaggio.
              Questi dati sono utilizzati esclusivamente per ricevere, valutare
              e rispondere alla tua richiesta di contatto relativa a un
              progetto. Non sono utilizzati per finalità di marketing o per
              inviare comunicazioni promozionali.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              Base giuridica
            </h2>
            <p className="mt-2">
              Il trattamento è necessario all&apos;esecuzione di misure
              precontrattuali adottate su tua richiesta, ai sensi dell&apos;art.
              6, par. 1, lett. b) del Regolamento (UE) 2016/679 (GDPR). La
              presa visione della presente informativa è richiesta prima
              dell&apos;invio del modulo e non modifica questa base giuridica.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              Modalità e fornitori tecnici
            </h2>
            <p className="mt-2">
              I dati sono trattati con strumenti informatici e limitatamente a
              quanto necessario per gestire la richiesta. L&apos;infrastruttura
              di hosting è fornita da Vercel; Resend è utilizzato per la
              trasmissione delle email. Questi fornitori trattano i dati per
              consentire il funzionamento tecnico del servizio, secondo i
              rispettivi termini e informative sulla privacy. I dati non sono
              venduti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              Conservazione
            </h2>
            <p className="mt-2">
              I dati sono conservati per il tempo necessario a gestire la
              richiesta e gli eventuali successivi rapporti precontrattuali,
              fatti salvi gli ulteriori tempi di conservazione previsti dalla
              legge o necessari per tutelare i diritti del Titolare.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-extrabold uppercase">
              I tuoi diritti
            </h2>
            <p className="mt-2">
              Puoi chiedere in ogni momento l&apos;accesso ai tuoi dati, la
              rettifica, la cancellazione o la limitazione del trattamento,
              scrivendo all&apos;indirizzo email del Titolare. Hai inoltre il
              diritto di proporre reclamo al Garante per la protezione dei dati
              personali, se ritieni che il trattamento violi la normativa
              applicabile.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configurazione email

Per abilitare l'invio delle richieste dal configuratore:

1. Crea una API key in Resend e verifica un dominio che controlli.
2. In Vercel, aggiungi `RESEND_API_KEY` e `RESEND_FROM_EMAIL` nelle variabili d'ambiente.
   Imposta il mittente nel formato `Portfolio Landing <noreply@tuodominioverificato.it>`.
3. Esegui un nuovo deploy dopo aver salvato le variabili.

Per lo sviluppo locale, configura le stesse variabili in `.env.local`. Il mittente di test
`onboarding@resend.dev` è usato solo se `RESEND_FROM_EMAIL` non è impostata; Resend può
limitare i mittenti non verificati. Il file `.env.local` è ignorato da Git: non inserire
chiavi o segreti nel codice e non committarli.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

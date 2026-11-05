import type { Metadata } from "next";
import {
  Caveat,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mattiagabellieri.com"),
  title: "Mattia Gabellieri | Full-Stack Web & App Developer",
  description:
    "Portfolio ufficiale di Mattia Gabellieri, sviluppatore software (Next.js, TypeScript, Tailwind CSS, GCP) a Civitanova Marche. Trasformo idee in web e mobile app, creator di Trimmy.",
  openGraph: {
    title: "Mattia Gabellieri | Full-Stack Web & App Developer",
    description:
      "Portfolio ufficiale di Mattia Gabellieri, sviluppatore software (Next.js, TypeScript, Tailwind CSS, GCP) a Civitanova Marche. Trasformo idee in web e mobile app, creator di Trimmy.",
    url: "https://mattiagabellieri.com",
    siteName: "Mattia Gabellieri Portfolio",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

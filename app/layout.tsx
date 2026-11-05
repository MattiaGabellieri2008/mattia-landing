import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

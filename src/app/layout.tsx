import './globals.css';

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Nippon Alarmes",
  description: "Alarme Monitorado 24h",
};

const notosans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-notosans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notosans.variable}`}>
      <body className='antialiased">'>
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  );
}

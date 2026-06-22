import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agriculture Industry Insights",
  description: "Market Intelligence & Industry Insights for Agriculture",
};

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextTopLoader color="#22c55e" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}

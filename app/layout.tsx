import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pawan Gujral — Senior Frontend Engineer | Stockholm",
  description:
    "Portfolio of Pawan Gujral, a Senior Frontend Engineer with 12+ years of experience. Currently at H&M, previously at JPMorgan Chase, McAfee, and Safello. Specializing in React, Next.js, and scalable frontend architectures.",
  openGraph: {
    title: "Pawan Gujral — Senior Frontend Engineer",
    description:
      "12+ years building user-centric web and mobile applications. React, Next.js, TypeScript.",
    url: "https://pawangujral.dev",
    type: "website",
  },
  alternates: {
    canonical: "https://pawangujral.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative z-10">{children}</body>
    </html>
  );
}

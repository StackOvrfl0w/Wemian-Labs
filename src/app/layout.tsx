import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const headingFallback = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFallback = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wemian Labs — Digital Optimizations",
  description:
    "Process automation, AI development, and digital transformation for companies ready to operate at scale.",
  openGraph: {
    title: "Wemian Labs — Digital Optimizations",
    description:
      "Process automation, AI development, and digital transformation for companies ready to operate at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&f[]=general-sans@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${headingFallback.variable} ${bodyFallback.variable} bg-dark font-body text-light antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

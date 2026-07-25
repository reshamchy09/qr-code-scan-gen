import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Free QR Code Generator & Scanner Online | QR Free",
    template: "%s | QR Free",
  },
  description:
    "Generate and scan QR codes instantly for free. Create QR codes for URLs, WiFi, text, email, phone numbers, and WhatsApp with no signup required.",
  keywords: [
    "Free QR Code Generator",
    "QR Code Scanner",
    "Generate QR Code",
    "Scan QR Code",
    "QR Generator Online",
    "QR Scanner Online",
    "WiFi QR Code",
    "WhatsApp QR Code",
    "QR Code Maker",
    "Online QR Code",
  ],
  authors: [{ name: "QR Free" }],
  creator: "QR Free",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "QR Free",
    title: "Free QR Code Generator & Scanner Online | QR Free",
    description:
      "Generate and scan QR codes instantly for free. Create QR codes for URLs, WiFi, text, email, phone numbers, and WhatsApp with no signup required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator & Scanner Online | QR Free",
    description:
      "Generate and scan QR codes instantly for free. No signup required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

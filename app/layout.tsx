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
    'QR Code Generator',
    'Free QR Code Generator',
    'Free QR Code Maker',
    'QR Generator Online',
    'Create QR Code',
    'Create QR Code Online',
    'Generate QR Code',
    'QR Code Creator',
    'QR Code Maker',
    'QR Code Online',
    'QR Code Scanner',
    'Free QR Code Scanner',
    'Scan QR Code',
    'Scan QR Code Online',
    'QR Scanner Online',
    'QR Reader',
    'QR Code Reader',
    'Online QR Scanner',
    'QR Code Generator Free',
    'Custom QR Code Generator',
    'QR Code with Logo',
    'Color QR Code Generator',
    'Dynamic QR Code',
    'Static QR Code',
    'Best QR Code Generator',
    'Unlimited QR Codes',
    'QR Code Download PNG',
    'QR Code Download SVG',
    'High Resolution QR Code',
    'URL QR Code',
    'Website QR Code',
    'Link QR Code',
    'Text QR Code',
    'Email QR Code',
    'Phone QR Code',
    'SMS QR Code',
    'WiFi QR Code',
    'WiFi QR Code Generator',
    'WhatsApp QR Code',
    'Facebook QR Code',
    'Instagram QR Code',
    'YouTube QR Code',
    'Twitter QR Code',
    'LinkedIn QR Code',
    'Telegram QR Code',
    'Discord QR Code',
    'Google Maps QR Code',
    'Location QR Code',
    'vCard QR Code',
    'Contact QR Code',
    'Business Card QR Code',
    'Event QR Code',
    'Calendar QR Code',
    'Restaurant QR Code',
    'Menu QR Code',
    'PDF QR Code',
    'Image QR Code',
    'App Download QR Code',
    'Free Online QR Tool',
    'Responsive QR Generator',
    'Fast QR Code Generator',
    'Secure QR Code Generator',
    'Mobile QR Scanner',
    'Instant QR Generator',
    'Next.js QR Code Generator',
    'Open Source QR Generator',
    'Online QR Code Tool',
    'Free QR Tools',
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
  verification: {
    google: "UXgah7mYSGxBtnaJuf4JEsfA3rjch1Jx8aVAu9ShzbQ",
  },
  other: {
    "google-adsense-account": "ca-pub-5622393858349174",
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

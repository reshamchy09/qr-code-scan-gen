import type { Metadata } from 'next';
import GeneratorClient from './GeneratorClient';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'Free QR Code Generator',
  description:
    'Create QR codes for URLs, WiFi, text, email, phone numbers, SMS, and WhatsApp. Download as PNG or SVG. 100% free, no signup required.',
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
  ]
};

export default function GeneratorPage() {
  return (
    <>
      <GeneratorClient />
      <AdUnit slot="generator" />
    </>
  );
}

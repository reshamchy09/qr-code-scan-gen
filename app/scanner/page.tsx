import type { Metadata } from 'next';
import ScannerClient from './ScannerClient';

export const metadata: Metadata = {
  title: 'Free QR Code Scanner',
  description:
    'Scan QR codes using your camera or upload an image. Decode QR codes instantly for free. No app download or signup required.',
  keywords: [
    'QR Code Scanner',
    'Online QR Scanner',
    'Scan QR Code',
    'QR Code Reader',
    'Camera QR Scanner',
    'Image QR Scanner',
  ],
};

export default function ScannerPage() {
  return <ScannerClient />;
}

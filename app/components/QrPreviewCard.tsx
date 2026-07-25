'use client';

import { useRef, useCallback } from 'react';

interface QrPreviewCardProps {
  qrDataUrl: string | null;
  qrSvgString: string | null;
  onClear: () => void;
}

export default function QrPreviewCard({ qrDataUrl, qrSvgString, onClear }: QrPreviewCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const downloadPng = useCallback(() => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = qrDataUrl;
    link.click();
  }, [qrDataUrl]);

  const downloadSvg = useCallback(() => {
    if (!qrSvgString) return;
    const blob = new Blob([qrSvgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'qr-code.svg';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  }, [qrSvgString]);

  const copyImage = useCallback(async () => {
    if (!qrDataUrl) return;
    try {
      const res = await fetch(qrDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      alert('QR code copied to clipboard!');
    } catch {
      // Fallback: copy data URL as text
      try {
        await navigator.clipboard.writeText(qrDataUrl);
        alert('QR code URL copied to clipboard!');
      } catch {
        alert('Could not copy to clipboard. Try downloading instead.');
      }
    }
  }, [qrDataUrl]);

  return (
    <div className="glass-card-static p-6 flex flex-col items-center gap-5">
      {/* QR Code Display */}
      <div className="qr-display w-full max-w-[280px] aspect-square">
        {qrDataUrl ? (
          <img
            ref={imgRef}
            src={qrDataUrl}
            alt="Generated QR Code"
            className="w-full h-full object-contain rounded-lg"
            id="qr-preview-image"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center gap-3">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-gray-300">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="15" y="15" width="2" height="2" fill="currentColor"/>
              <rect x="19" y="15" width="2" height="2" fill="currentColor"/>
              <rect x="15" y="19" width="2" height="2" fill="currentColor"/>
              <rect x="19" y="19" width="2" height="2" fill="currentColor"/>
            </svg>
            <p className="text-sm text-gray-400">Your QR code will appear here</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {qrDataUrl && (
        <div className="w-full grid grid-cols-2 gap-2 animate-fade-in">
          <button onClick={downloadPng} className="btn-primary text-xs !py-2" id="download-png-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            PNG
          </button>
          <button onClick={downloadSvg} className="btn-accent text-xs !py-2" id="download-svg-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            SVG
          </button>
          <button onClick={copyImage} className="btn-secondary text-xs !py-2" id="copy-qr-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy
          </button>
          <button onClick={onClear} className="btn-ghost text-xs !py-2 border border-[rgba(239,68,68,0.2)] text-error hover:bg-[rgba(239,68,68,0.1)]" id="clear-qr-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import jsQR from 'jsqr';

type ScanMode = 'camera' | 'upload';

export default function ScannerClient() {
  const [mode, setMode] = useState<ScanMode>('camera');
  const [result, setResult] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopCamera = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = 0;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setScanning(false);
  }, []);

  const scanFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      animFrameRef.current = requestAnimationFrame(scanFrame);
      return;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });

    if (code && code.data) {
      setResult(code.data);
      stopCamera();
      return;
    }

    animFrameRef.current = requestAnimationFrame(scanFrame);
  }, [stopCamera]);

  const startCamera = useCallback(async () => {
    setError(null);
    setResult(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        await videoRef.current.play();
        setScanning(true);
        animFrameRef.current = requestAnimationFrame(scanFrame);
      }
    } catch {
      setError('Could not access camera. Please allow camera permissions and try again.');
    }
  }, [scanFrame]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      setResult(null);
      const file = e.target.files?.[0];
      if (!file) return;

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Could not process image.');
          return;
        }
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'attemptBoth',
        });

        if (code && code.data) {
          setResult(code.data);
        } else {
          setError('No QR code found in the uploaded image. Try a clearer image.');
        }
      };
      img.onerror = () => {
        setError('Could not load image. Please try a different file.');
      };
      img.src = URL.createObjectURL(file);

      // Reset file input so same file can be uploaded again
      e.target.value = '';
    },
    []
  );

  const copyResult = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = result;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isUrl = (str: string) => {
    try {
      const url = new URL(str);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const scanAgain = () => {
    setResult(null);
    setError(null);
    if (mode === 'camera') {
      startCamera();
    }
  };

  const switchMode = (newMode: ScanMode) => {
    stopCamera();
    setResult(null);
    setError(null);
    setMode(newMode);
  };

  return (
    <section className="py-10 md:py-16" id="scanner-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            QR Code <span className="gradient-text-reverse">Scanner</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Scan QR codes using your camera or upload an image to decode.
          </p>
        </div>

        {/* Mode Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1.5 p-1.5 rounded-xl bg-surface-1 border border-border" id="scanner-mode-tabs">
            <button
              onClick={() => switchMode('camera')}
              className={`tab-button flex items-center gap-1.5 ${mode === 'camera' ? 'active' : ''}`}
              id="tab-camera"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              Camera
            </button>
            <button
              onClick={() => switchMode('upload')}
              className={`tab-button flex items-center gap-1.5 ${mode === 'upload' ? 'active' : ''}`}
              id="tab-upload"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              Upload Image
            </button>
          </div>
        </div>

        {/* Scanner Area */}
        <div className="glass-card-static p-6 md:p-8 animate-fade-in">
          {/* Camera Mode */}
          {mode === 'camera' && (
            <div className="flex flex-col items-center gap-6" id="camera-scanner">
              {!scanning && !result && (
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/40">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <p className="text-sm text-muted">Click the button below to start scanning</p>
                  </div>
                  <button onClick={startCamera} className="btn-primary" id="start-camera-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    Start Camera
                  </button>
                </div>
              )}

              {scanning && (
                <div className="w-full max-w-md">
                  <div className="scanner-viewport aspect-square relative">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-xl"
                      playsInline
                      muted
                    />
                    {/* Corner markers */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-accent rounded-tl-lg" />
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-accent rounded-tr-lg" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-accent rounded-bl-lg" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-accent rounded-br-lg" />
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Scanning for QR codes...
                  </div>
                  <div className="text-center mt-3">
                    <button onClick={stopCamera} className="btn-ghost text-xs" id="stop-camera-btn">
                      Stop Camera
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Upload Mode */}
          {mode === 'upload' && !result && (
            <div className="flex flex-col items-center gap-6" id="upload-scanner">
              <div
                className="w-full max-w-md h-64 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/40 hover:bg-surface-1/30 transition-all"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/40">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div className="text-center">
                  <p className="text-sm text-muted mb-1">Click or drag an image here</p>
                  <p className="text-xs text-muted/60">Supports JPG, PNG, GIF, WebP</p>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
                id="file-upload-input"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-accent"
                id="upload-image-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Choose Image
              </button>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 rounded-xl bg-error/10 border border-error/20 text-center animate-fade-in" id="scan-error">
              <p className="text-sm text-error">{error}</p>
              <button onClick={scanAgain} className="btn-ghost text-xs mt-3 text-error hover:bg-error/10">
                Try Again
              </button>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-6 animate-slide-up" id="scan-result">
              <div className="p-5 rounded-xl bg-success/5 border border-success/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-success">QR Code Detected!</span>
                </div>

                <div className="p-3 rounded-lg bg-[rgba(10,10,30,0.5)] border border-border mb-4 break-all">
                  <p className="text-sm text-foreground font-mono">{result}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button onClick={copyResult} className="btn-secondary text-xs !py-2" id="copy-result-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    {copied ? 'Copied!' : 'Copy'}
                  </button>

                  {isUrl(result) && (
                    <a
                      href={result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs !py-2"
                      id="open-url-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Open URL
                    </a>
                  )}

                  <button onClick={scanAgain} className="btn-primary text-xs !py-2" id="scan-again-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                    </svg>
                    Scan Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

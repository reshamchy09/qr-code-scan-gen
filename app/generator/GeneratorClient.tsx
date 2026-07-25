'use client';

import { useState, useEffect, useCallback } from 'react';
import QRCode from 'qrcode';
import QrPreviewCard from '../components/QrPreviewCard';

type QrType = 'url' | 'text' | 'email' | 'phone' | 'sms' | 'wifi' | 'whatsapp';

interface TabConfig {
  id: QrType;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabConfig[] = [
  {
    id: 'url',
    label: 'URL',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    id: 'text',
    label: 'Text',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: 'sms',
    label: 'SMS',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'wifi',
    label: 'WiFi',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

// Form data interfaces
interface FormFields {
  // URL
  url: string;
  // Text
  text: string;
  // Email
  emailTo: string;
  emailSubject: string;
  emailBody: string;
  // Phone
  phone: string;
  // SMS
  smsPhone: string;
  smsMessage: string;
  // WiFi
  wifiSsid: string;
  wifiPassword: string;
  wifiEncryption: 'WPA' | 'WEP' | 'nopass';
  wifiHidden: boolean;
  // WhatsApp
  whatsappPhone: string;
  whatsappMessage: string;
}

const initialFormFields: FormFields = {
  url: '',
  text: '',
  emailTo: '',
  emailSubject: '',
  emailBody: '',
  phone: '',
  smsPhone: '',
  smsMessage: '',
  wifiSsid: '',
  wifiPassword: '',
  wifiEncryption: 'WPA',
  wifiHidden: false,
  whatsappPhone: '',
  whatsappMessage: '',
};

function escapeWifiField(s: string): string {
  return s.replace(/([\\;,":.])/g, '\\$1');
}

export default function GeneratorClient() {
  const [activeTab, setActiveTab] = useState<QrType>('url');
  const [fields, setFields] = useState<FormFields>(initialFormFields);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [qrSvgString, setQrSvgString] = useState<string | null>(null);

  const updateField = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  // Build the QR content string based on active tab
  const getQrContent = useCallback((): string => {
    switch (activeTab) {
      case 'url':
        return fields.url.trim();
      case 'text':
        return fields.text.trim();
      case 'email': {
        const parts: string[] = [];
        if (fields.emailSubject) parts.push(`subject=${encodeURIComponent(fields.emailSubject)}`);
        if (fields.emailBody) parts.push(`body=${encodeURIComponent(fields.emailBody)}`);
        const query = parts.length ? `?${parts.join('&')}` : '';
        return fields.emailTo ? `mailto:${fields.emailTo}${query}` : '';
      }
      case 'phone':
        return fields.phone ? `tel:${fields.phone}` : '';
      case 'sms': {
        const body = fields.smsMessage ? `?body=${encodeURIComponent(fields.smsMessage)}` : '';
        return fields.smsPhone ? `sms:${fields.smsPhone}${body}` : '';
      }
      case 'wifi': {
        if (!fields.wifiSsid) return '';
        const T = fields.wifiEncryption;
        const S = escapeWifiField(fields.wifiSsid);
        const P = fields.wifiPassword ? escapeWifiField(fields.wifiPassword) : '';
        const H = fields.wifiHidden ? 'H:true' : '';
        return `WIFI:T:${T};S:${S};P:${P};${H};`;
      }
      case 'whatsapp': {
        const phone = fields.whatsappPhone.replace(/[^0-9]/g, '');
        const msg = fields.whatsappMessage ? `&text=${encodeURIComponent(fields.whatsappMessage)}` : '';
        return phone ? `https://wa.me/${phone}?${msg}` : '';
      }
      default:
        return '';
    }
  }, [activeTab, fields]);

  // Generate QR code whenever content changes
  useEffect(() => {
    const content = getQrContent();
    if (!content) {
      setQrDataUrl(null);
      setQrSvgString(null);
      return;
    }

    let cancelled = false;

    const generate = async () => {
      try {
        const [dataUrl, svgStr] = await Promise.all([
          QRCode.toDataURL(content, {
            width: 512,
            margin: 2,
            color: { dark: '#000000', light: '#ffffff' },
            errorCorrectionLevel: 'M',
          }),
          QRCode.toString(content, {
            type: 'svg',
            width: 512,
            margin: 2,
            color: { dark: '#000000', light: '#ffffff' },
            errorCorrectionLevel: 'M',
          }),
        ]);
        if (!cancelled) {
          setQrDataUrl(dataUrl);
          setQrSvgString(svgStr);
        }
      } catch {
        if (!cancelled) {
          setQrDataUrl(null);
          setQrSvgString(null);
        }
      }
    };

    const timer = setTimeout(generate, 150);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [getQrContent]);

  const handleClear = () => {
    setFields(initialFormFields);
    setQrDataUrl(null);
    setQrSvgString(null);
  };

  return (
    <section className="py-10 md:py-16" id="generator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            QR Code <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Choose a QR code type, enter your content, and download instantly.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-surface-1 border border-border" id="qr-type-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button flex items-center gap-1.5 ${activeTab === tab.id ? 'active' : ''}`}
                id={`tab-${tab.id}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Input Form */}
          <div className="glass-card-static p-6 md:p-8 animate-fade-in" id="generator-form">
            <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
              {tabs.find((t) => t.id === activeTab)?.icon}
              {tabs.find((t) => t.id === activeTab)?.label} QR Code
            </h2>

            {/* URL Tab */}
            {activeTab === 'url' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="url-input" className="input-label">Website URL</label>
                  <input
                    type="url"
                    id="url-input"
                    className="input-field"
                    placeholder="https://example.com"
                    value={fields.url}
                    onChange={(e) => updateField('url', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Text Tab */}
            {activeTab === 'text' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="text-input" className="input-label">Your Text</label>
                  <textarea
                    id="text-input"
                    className="input-field min-h-[120px] resize-y"
                    placeholder="Enter any text here..."
                    value={fields.text}
                    onChange={(e) => updateField('text', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Email Tab */}
            {activeTab === 'email' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-to" className="input-label">Email Address</label>
                  <input
                    type="email"
                    id="email-to"
                    className="input-field"
                    placeholder="hello@example.com"
                    value={fields.emailTo}
                    onChange={(e) => updateField('emailTo', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email-subject" className="input-label">Subject (Optional)</label>
                  <input
                    type="text"
                    id="email-subject"
                    className="input-field"
                    placeholder="Meeting request"
                    value={fields.emailSubject}
                    onChange={(e) => updateField('emailSubject', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email-body" className="input-label">Body (Optional)</label>
                  <textarea
                    id="email-body"
                    className="input-field min-h-[80px] resize-y"
                    placeholder="Email body text..."
                    value={fields.emailBody}
                    onChange={(e) => updateField('emailBody', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Phone Tab */}
            {activeTab === 'phone' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="phone-input" className="input-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone-input"
                    className="input-field"
                    placeholder="+1 234 567 8900"
                    value={fields.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* SMS Tab */}
            {activeTab === 'sms' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="sms-phone" className="input-label">Phone Number</label>
                  <input
                    type="tel"
                    id="sms-phone"
                    className="input-field"
                    placeholder="+1 234 567 8900"
                    value={fields.smsPhone}
                    onChange={(e) => updateField('smsPhone', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="sms-message" className="input-label">Message (Optional)</label>
                  <textarea
                    id="sms-message"
                    className="input-field min-h-[80px] resize-y"
                    placeholder="Your SMS message..."
                    value={fields.smsMessage}
                    onChange={(e) => updateField('smsMessage', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* WiFi Tab */}
            {activeTab === 'wifi' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="wifi-ssid" className="input-label">Network Name (SSID)</label>
                  <input
                    type="text"
                    id="wifi-ssid"
                    className="input-field"
                    placeholder="My WiFi Network"
                    value={fields.wifiSsid}
                    onChange={(e) => updateField('wifiSsid', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="wifi-password" className="input-label">Password</label>
                  <input
                    type="text"
                    id="wifi-password"
                    className="input-field"
                    placeholder="WiFi password"
                    value={fields.wifiPassword}
                    onChange={(e) => updateField('wifiPassword', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="wifi-encryption" className="input-label">Encryption</label>
                  <select
                    id="wifi-encryption"
                    className="input-field"
                    value={fields.wifiEncryption}
                    onChange={(e) => updateField('wifiEncryption', e.target.value as 'WPA' | 'WEP' | 'nopass')}
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wifi-hidden"
                    checked={fields.wifiHidden}
                    onChange={(e) => updateField('wifiHidden', e.target.checked)}
                    className="w-4 h-4 accent-primary rounded"
                  />
                  <label htmlFor="wifi-hidden" className="text-sm text-muted cursor-pointer">
                    Hidden Network
                  </label>
                </div>
              </div>
            )}

            {/* WhatsApp Tab */}
            {activeTab === 'whatsapp' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="whatsapp-phone" className="input-label">Phone Number (with country code)</label>
                  <input
                    type="tel"
                    id="whatsapp-phone"
                    className="input-field"
                    placeholder="+1 234 567 8900"
                    value={fields.whatsappPhone}
                    onChange={(e) => updateField('whatsappPhone', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp-message" className="input-label">Message (Optional)</label>
                  <textarea
                    id="whatsapp-message"
                    className="input-field min-h-[80px] resize-y"
                    placeholder="Hi! I found your contact via QR code."
                    value={fields.whatsappMessage}
                    onChange={(e) => updateField('whatsappMessage', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: QR Preview */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <QrPreviewCard
              qrDataUrl={qrDataUrl}
              qrSvgString={qrSvgString}
              onClear={handleClear}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

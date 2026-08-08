'use client';

import { useEffect } from 'react';
import { ADSENSE_CLIENT, AD_SLOTS, type AdSlotKey } from '../lib/adsense';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slot: AdSlotKey;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  layout?: string;
}

export default function AdUnit({ slot, format = 'auto', layout }: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blocked or script not loaded yet; ignore.
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={AD_SLOTS[slot]}
      data-ad-format={format}
      data-full-width-responsive="true"
      data-ad-layout={layout}
    />
  );
}
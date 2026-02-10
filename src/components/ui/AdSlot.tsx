'use client';

import { siteConfig } from '@/lib/config';
import { useEffect } from 'react';

interface AdSlotProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

export function AdSlot({ slot, format = 'auto', responsive = true }: AdSlotProps) {
  useEffect(() => {
    if (siteConfig.adsensePublisherId && typeof window !== 'undefined') {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  if (!siteConfig.adsensePublisherId) {
    return null;
  }

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={siteConfig.adsensePublisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

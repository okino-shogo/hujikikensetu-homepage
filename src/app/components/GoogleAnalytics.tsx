"use client";

import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {
  ga_id: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics({ ga_id }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', ga_id, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [ga_id]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
} 
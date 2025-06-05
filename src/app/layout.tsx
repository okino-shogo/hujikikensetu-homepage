import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LoadingProvider from "./components/LoadingProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "藤喜建設 | 岩手県八幡平市の型枠工事専門会社",
  description: "岩手県八幡平市を拠点とする型枠工事専門会社。住宅、商業施設、土木工事まで幅広く対応。23年の実績と技術で地域の発展に貢献します。",
  keywords: "型枠工事,建設会社,岩手県,八幡平市,住宅建築,商業施設,土木工事,リフォーム,採用,求人",
  authors: [{ name: "藤喜建設" }],
  creator: "藤喜建設",
  publisher: "藤喜建設",
  robots: "index,follow",
  openGraph: {
    title: "藤喜建設 | 岩手県八幡平市の型枠工事専門会社",
    description: "岩手県八幡平市を拠点とする型枠工事専門会社。23年の実績と技術で地域の発展に貢献します。",
    locale: "ja_JP",
    type: "website",
    siteName: "藤喜建設",
    url: "https://www.fujiki-kensetsu.jp",
    images: [
      {
        url: "/images/fujiki-logo_edited.avif",
        width: 400,
        height: 400,
        alt: "藤喜建設ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "藤喜建設 | 岩手県八幡平市の型枠工事専門会社",
    description: "岩手県八幡平市を拠点とする型枠工事専門会社。23年の実績と技術で地域の発展に貢献します。",
    images: ["/images/fujiki-logo_edited.avif"],
  },
  verification: {
    // Google Search Console verification (実際の値に置き換えてください)
    google: "google-verification-code-here",
  },
  alternates: {
    canonical: "https://www.fujiki-kensetsu.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        {GA_ID && <GoogleAnalytics ga_id={GA_ID} />}
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/fujiki-logo_edited.avif" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "株式会社 藤喜建設",
              "alternateName": "藤喜建設",
              "url": "https://www.fujiki-kensetsu.jp",
              "logo": "https://www.fujiki-kensetsu.jp/images/fujiki-logo_edited.avif",
              "description": "岩手県八幡平市を拠点とする型枠工事専門会社。住宅、商業施設、土木工事まで幅広く対応。",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "大更第25地割68番地176",
                "addressLocality": "八幡平市",
                "addressRegion": "岩手県",
                "postalCode": "028-7100",
                "addressCountry": "JP"
              },
              "telephone": "+81-195-75-2345",
              "foundingDate": "2001",
              "sameAs": [
                "https://www.fujiki-kensetsu.jp"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "岩手県"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "型枠工事サービス",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "住宅建築型枠工事"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "商業施設型枠工事"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "土木工事型枠工事"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "リフォーム型枠工事"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${roboto.variable} font-sans antialiased`}
      >
        <LoadingProvider>
          <Header />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}

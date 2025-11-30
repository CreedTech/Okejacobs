import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactLenis } from '@/utils/lenis';

const syne = Syne({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

// Site configuration
const siteConfig = {
  name: 'TheOkeJacobs Photography',
  title:
    'TheOkeJacobs | Award-Winning Nigerian Photographer UK | Wedding & Portrait Photography',
  description:
    'Award-winning Nigerian photographer based in UK. Specializing in weddings, portraits, and lifestyle photography across London, Birmingham & Manchester. 10+ years experience capturing Nigerian, African & multicultural celebrations with cultural sensitivity and artistic excellence.',
  url: 'https://www.okejacobs.online/',
  ogImage: '/images/DSC_0230.JPG',
  creator: 'TheOkeJacobs',
  keywords: [
    'Nigerian photographer UK',
    'African wedding photographer London',
    'Nigerian wedding photography',
    'traditional Nigerian wedding photographer',
    'UK wedding photographer',
    'portrait photographer London',
    'Birmingham wedding photographer',
    'Manchester wedding photographer',
    'Yoruba wedding photographer',
    'Igbo wedding photographer',
    'multicultural wedding photography',
    'child dedication photographer UK',
    'lifestyle photographer London',
    'fashion photographer UK',
    'TheOkeJacobs',
    'professional photographer UK',
    'award winning photographer',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'TheOkeJacobs - Award-Winning Nigerian Photographer UK',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@the_okejacobs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'TheOkeJacobs Photography',
              image: `${siteConfig.url}/images/DSC_0230.JPG`,
              '@id': siteConfig.url,
              url: siteConfig.url,
              telephone: '+44 783 396 7146',
              // priceRange: "££-£££",
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressRegion: 'England',
                addressCountry: 'GB',
              },
              // geo: {
              //   "@type": "GeoCoordinates",
              //   latitude: 51.5074,
              //   longitude: -0.1278,
              // },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '20:00',
              },
              sameAs: [
                'https://www.instagram.com/the_okejacobs',
                'https://www.tiktok.com/@big_okejacobs1',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '500',
              },
              description: siteConfig.description,
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Photography Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Wedding Photography',
                      description:
                        'Full-day wedding photography coverage including traditional Nigerian, African, and multicultural weddings',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Portrait Photography',
                      description:
                        'Professional portrait sessions for individuals, families, and personal branding',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lifestyle Photography',
                      description: 'Authentic lifestyle and event photography',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Child Dedication Photography',
                      description:
                        'Cultural celebration and naming ceremony photography',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${syne.variable} ${inter.variable}`}>
        <ReactLenis root>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}

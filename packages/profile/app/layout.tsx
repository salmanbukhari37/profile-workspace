import type { Metadata } from 'next';
import { profile } from './data';
import { Syne, DM_Sans } from 'next/font/google';

import { ClarityScript } from '../components/ClarityScript';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salmanbukhari.com';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: 'Salman Bukhari Portfolio',
    images: [
      {
        url: '/profile_picture.png',
        width: 1254,
        height: 1254,
        alt: 'Salman Bukhari — professional headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    images: ['/profile_picture.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'zdTQFx5a3QPfFAFLzEMr7uc4UW3EwDHeDhOFWeEosVA',
  },
  icons: {
    icon: '/fav-icon-32x32.png',
    shortcut: '/fav-icon-32x32.png',
    apple: '/fav-icon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <ClarityScript clarityId={clarityId} />
        {children}
      </body>
    </html>
  );
}

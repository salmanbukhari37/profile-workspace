import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';

import { ClarityScript } from '../components/ClarityScript';
import './globals.css';

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
  metadataBase: new URL('https://profile.salmanbukhari37.workers.dev'),
  title: 'Salman Bukhari — Senior Software Engineer',
  description:
    '10+ years of experience in full-stack development with React, Next.js, Node.js, and more. Based in Islamabad, Pakistan.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Salman Bukhari — Senior Software Engineer',
    description:
      '10+ years of experience in full-stack development with React, Next.js, Node.js, and more. Based in Islamabad, Pakistan.',
    siteName: 'Salman Bukhari Portfolio',
    images: [
      {
        url: '/profile-photo.png',
        width: 1200,
        height: 1200,
        alt: 'Salman Bukhari — professional headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salman Bukhari — Senior Software Engineer',
    description:
      '10+ years of experience in full-stack development with React, Next.js, Node.js, and more. Based in Islamabad, Pakistan.',
    images: ['/profile-photo.png'],
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

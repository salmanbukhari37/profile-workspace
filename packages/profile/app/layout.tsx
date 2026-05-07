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
    '10+ years of experience building scalable digital products for leading enterprises and startups. Specialized in developer documentation, software architecture, application security, CI/CD automation, and modern technologies including React, Next.js, TypeScript, Node.js, and NestJS.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Salman Bukhari — Senior Software Engineer',
    description:
      '10+ years of experience building scalable digital products for leading enterprises and startups. Specialized in developer documentation, software architecture, application security, CI/CD automation, and modern technologies including React, Next.js, TypeScript, Node.js, and NestJS.',
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
      '10+ years of experience building scalable digital products for leading enterprises and startups. Specialized in developer documentation, software architecture, application security, CI/CD automation, and modern technologies including React, Next.js, TypeScript, Node.js, and NestJS.',
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
  verification: {
    google: 'P5FkYAipeVzrwdyNcdhhkqIC_T4crxvH7gGQ4yUkir0',
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

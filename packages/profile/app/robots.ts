import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://profile.salmanbukhari37.workers.dev/sitemap.xml',
    host: 'https://profile.salmanbukhari37.workers.dev',
  };
}

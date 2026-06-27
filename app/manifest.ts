import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RenewGuard \u2014 Compliance Renewal Tracking',
    short_name: 'RenewGuard',
    description: 'Never miss a license, certification, permit, or insurance renewal again.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2954FF',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}

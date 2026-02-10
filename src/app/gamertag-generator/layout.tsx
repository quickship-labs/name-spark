import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Gamertag Generator - Epic Gaming Names',
  description: 'Generate epic and funny gamertags for Xbox, PlayStation, Steam, and more. Free gamertag generator with cool gaming names.',
  keywords: ['gamertag generator', 'gaming names', 'xbox gamertag', 'playstation names', 'steam names', 'epic gamertags'],
  path: '/gamertag-generator',
});

export default function GamertagGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

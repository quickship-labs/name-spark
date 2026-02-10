import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Username Generator - Create Unique Usernames',
  description: 'Generate cool and unique usernames for social media, gaming, and online accounts. Free username generator with multiple styles.',
  keywords: ['username generator', 'username ideas', 'cool usernames', 'social media usernames', 'unique usernames'],
  path: '/username-generator',
});

export default function UsernameGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Team Name Generator - Sports, Work & Trivia Team Names',
  description: 'Generate creative team names for sports, work projects, and trivia nights. Free team name generator with unlimited ideas.',
  keywords: ['team name generator', 'sports team names', 'trivia team names', 'work team names', 'team names ideas'],
  path: '/team-name-generator',
});

export default function TeamNameGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

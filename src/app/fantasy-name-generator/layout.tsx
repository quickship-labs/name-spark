import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Fantasy Name Generator - Elf, Dwarf, Dragon Names & More',
  description: 'Generate fantasy names for elves, dwarves, dragons, orcs, and humans. Perfect for D&D, RPG games, and creative writing.',
  keywords: ['fantasy name generator', 'elf names', 'dwarf names', 'dragon names', 'D&D names', 'RPG names', 'fantasy character names'],
  path: '/fantasy-name-generator',
});

export default function FantasyNameGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

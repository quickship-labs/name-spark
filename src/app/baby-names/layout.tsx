import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Baby Name Generator - Find Perfect Baby Names with Meanings',
  description: 'Discover beautiful baby names for boys, girls, and unisex. Browse 300+ names with meanings and origins. Find the perfect name for your baby.',
  keywords: ['baby names', 'baby name generator', 'boy names', 'girl names', 'baby name meanings', 'name origins'],
  path: '/baby-names',
});

export default function BabyNamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

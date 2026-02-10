import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Business Name Generator - Create Professional Company Names',
  description: 'Generate unique and professional business names for your company. Free business name generator with unlimited combinations.',
  keywords: ['business name generator', 'company name generator', 'brand name generator', 'business names', 'startup names'],
  path: '/business-name-generator',
});

export default function BusinessNameLayout({ children }: { children: React.ReactNode }) {
  return children;
}

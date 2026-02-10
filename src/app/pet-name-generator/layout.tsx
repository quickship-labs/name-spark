import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Pet Name Generator - Cute Names for Dogs, Cats & More',
  description: 'Find the perfect name for your pet! Generate cute and unique names for dogs, cats, birds, fish, rabbits, and hamsters.',
  keywords: ['pet name generator', 'dog names', 'cat names', 'pet names', 'puppy names', 'kitten names', 'cute pet names'],
  path: '/pet-name-generator',
});

export default function PetNameGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

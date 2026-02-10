import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Funny WiFi Name Generator - 200+ Clever Network Names',
  description: 'Generate funny and creative WiFi network names. Browse 200+ clever, punny, and hilarious WiFi names for your router.',
  keywords: ['wifi name generator', 'funny wifi names', 'wifi network names', 'clever wifi names', 'router names', 'ssid names'],
  path: '/wifi-name-generator',
});

export default function WifiNameGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

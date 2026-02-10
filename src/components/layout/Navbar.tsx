import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/baby-names" className="text-gray-600 hover:text-orange-600 transition">
              Baby Names
            </Link>
            <Link href="/business-name-generator" className="text-gray-600 hover:text-orange-600 transition">
              Business
            </Link>
            <Link href="/username-generator" className="text-gray-600 hover:text-orange-600 transition">
              Username
            </Link>
            <Link href="/gamertag-generator" className="text-gray-600 hover:text-orange-600 transition">
              Gamertag
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

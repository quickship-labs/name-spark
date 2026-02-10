import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Find the perfect name for your baby, business, username, and more with our free name generators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Generators</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/baby-names" className="text-gray-600 hover:text-orange-600">Baby Names</Link></li>
              <li><Link href="/business-name-generator" className="text-gray-600 hover:text-orange-600">Business Names</Link></li>
              <li><Link href="/username-generator" className="text-gray-600 hover:text-orange-600">Usernames</Link></li>
              <li><Link href="/gamertag-generator" className="text-gray-600 hover:text-orange-600">Gamertags</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">More Generators</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fantasy-name-generator" className="text-gray-600 hover:text-orange-600">Fantasy Names</Link></li>
              <li><Link href="/pet-name-generator" className="text-gray-600 hover:text-orange-600">Pet Names</Link></li>
              <li><Link href="/wifi-name-generator" className="text-gray-600 hover:text-orange-600">WiFi Names</Link></li>
              <li><Link href="/team-name-generator" className="text-gray-600 hover:text-orange-600">Team Names</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Free name generators</li>
              <li className="text-gray-600">No registration required</li>
              <li className="text-gray-600">Instant results</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

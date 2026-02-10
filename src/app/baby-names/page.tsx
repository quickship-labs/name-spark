'use client';

import { useState, useMemo } from 'react';
import { babyNames } from '@/data/baby-names';
import { AdSlot } from '@/components/ui/AdSlot';

export default function BabyNamesPage() {
  const [gender, setGender] = useState<'all' | 'boy' | 'girl' | 'unisex'>('all');
  const [origin, setOrigin] = useState<string>('all');
  const [startsWith, setStartsWith] = useState<string>('');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const origins = useMemo(() => {
    const uniqueOrigins = new Set(babyNames.map((name) => name.origin));
    return ['all', ...Array.from(uniqueOrigins).sort()];
  }, []);

  const filteredNames = useMemo(() => {
    return babyNames.filter((name) => {
      if (gender !== 'all' && name.gender !== gender) return false;
      if (origin !== 'all' && name.origin !== origin) return false;
      if (startsWith && !name.name.toLowerCase().startsWith(startsWith.toLowerCase())) return false;
      return true;
    });
  }, [gender, origin, startsWith]);

  const handleCopy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
            Baby Name Generator
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Discover beautiful baby names with meanings and origins. Browse over 300 names for boys, girls, and unisex.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as any)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="all">All Genders</option>
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Origin</label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {origins.map((o) => (
                    <option key={o} value={o}>
                      {o === 'all' ? 'All Origins' : o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Starts With</label>
                <input
                  type="text"
                  value={startsWith}
                  onChange={(e) => setStartsWith(e.target.value)}
                  placeholder="Enter letter..."
                  maxLength={1}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              Showing {filteredNames.length} names
            </div>
          </div>

          <AdSlot slot="baby-names-top" />

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredNames.map((name, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-rose-200 hover:border-rose-400 transition-all cursor-pointer group"
                  onClick={() => handleCopy(name.name)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-xl text-gray-800">{name.name}</span>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-700">
                        {name.gender}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                        {name.origin}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{name.meaning}</p>
                  </div>
                  <button
                    className="mt-2 md:mt-0 text-pink-600 hover:text-pink-700 transition-colors self-start md:self-center"
                    aria-label="Copy to clipboard"
                  >
                    {copiedName === name.name ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <AdSlot slot="baby-names-bottom" />
        </div>
      </div>
    </div>
  );
}

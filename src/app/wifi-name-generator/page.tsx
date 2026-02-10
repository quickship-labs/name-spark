'use client';

import { useState } from 'react';
import { wifiNames } from '@/data/wifi-names';

export default function WifiNameGeneratorPage() {
  const [category, setCategory] = useState('all');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const filteredNames = category === 'all'
    ? wifiNames.flatMap((cat) => cat.names)
    : wifiNames.find((cat) => cat.category === category)?.names || [];

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Funny WiFi Name Generator
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Browse 200+ clever, punny, and hilarious WiFi network names for your router
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <label className="block text-sm font-semibold mb-2 text-gray-700">Filter by Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent mb-2"
            >
              <option value="all">All Categories</option>
              {wifiNames.map((cat) => (
                <option key={cat.category} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-600">
              Showing {filteredNames.length} WiFi names
            </p>
          </div>

          {category === 'all' ? (
            <div className="space-y-8">
              {wifiNames.map((cat) => (
                <div key={cat.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{cat.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.names.map((name, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:border-cyan-400 transition-all cursor-pointer group"
                        onClick={() => handleCopy(name)}
                      >
                        <span className="font-medium text-gray-800">{name}</span>
                        <button
                          className="text-cyan-600 hover:text-cyan-700 transition-colors"
                          aria-label="Copy to clipboard"
                        >
                          {copiedName === name ? (
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
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredNames.map((name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:border-cyan-400 transition-all cursor-pointer group"
                    onClick={() => handleCopy(name)}
                  >
                    <span className="font-medium text-gray-800">{name}</span>
                    <button
                      className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copiedName === name ? (
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
          )}
        </div>
      </div>
    </div>
  );
}

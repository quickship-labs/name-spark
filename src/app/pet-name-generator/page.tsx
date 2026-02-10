'use client';

import { useState, useMemo } from 'react';
import { petNames } from '@/data/pet-names';

export default function PetNameGeneratorPage() {
  const [species, setSpecies] = useState('dog');
  const [personality, setPersonality] = useState('all');
  const [results, setResults] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const personalities = useMemo(() => {
    if (!species) return [];
    const petData = petNames[species];
    return ['all', ...Object.keys(petData.personalities)];
  }, [species]);

  const handleGenerate = () => {
    const petData = petNames[species];
    if (!petData) return;

    let allNames: string[] = [];
    if (personality === 'all') {
      Object.values(petData.personalities).forEach((names) => {
        allNames = [...allNames, ...names];
      });
    } else {
      allNames = petData.personalities[personality] || [];
    }

    const shuffled = [...allNames].sort(() => Math.random() - 0.5);
    setResults(shuffled.slice(0, 20));
    setCopiedIndex(null);
  };

  const handleCopy = async (name: string, index: number) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Pet Name Generator
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Find the perfect name for your furry, feathered, or finned friend
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Pet Type</label>
                <select
                  value={species}
                  onChange={(e) => {
                    setSpecies(e.target.value);
                    setPersonality('all');
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="fish">Fish</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="hamster">Hamster</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Personality</label>
                <select
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {personalities.map((p) => (
                    <option key={p} value={p}>
                      {p === 'all' ? 'All Personalities' : p.charAt(0).toUpperCase() + p.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Generate Pet Names
            </button>
          </div>

          {results.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Generated Names</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.map((name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-orange-200 hover:border-orange-400 transition-all cursor-pointer group"
                    onClick={() => handleCopy(name, index)}
                  >
                    <span className="font-medium text-gray-800">{name}</span>
                    <button
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
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

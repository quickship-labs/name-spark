'use client';

import { useState } from 'react';
import { GeneratorLayout } from '@/components/generator/GeneratorLayout';
import { generateFantasyNames } from '@/lib/name-generator';

export default function FantasyNameGeneratorPage() {
  const [race, setRace] = useState('elf');

  const handleGenerate = () => {
    return generateFantasyNames(race, 20);
  };

  const controls = (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">Fantasy Race</label>
      <select
        value={race}
        onChange={(e) => setRace(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent mb-4"
      >
        <option value="elf">Elf</option>
        <option value="dwarf">Dwarf</option>
        <option value="orc">Orc</option>
        <option value="human">Human</option>
        <option value="dragon">Dragon</option>
      </select>
    </div>
  );

  return (
    <GeneratorLayout
      title="Fantasy Name Generator"
      description="Create authentic fantasy names for elves, dwarves, dragons, and more. Perfect for D&D and RPG characters"
      controls={controls}
      onGenerate={handleGenerate}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Fantasy Races</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-violet-50 rounded-lg">
            <div className="text-2xl mb-2">🧝</div>
            <p className="font-semibold text-gray-700">Elf</p>
            <p className="text-xs text-gray-500">Graceful & Wise</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">⛏️</div>
            <p className="font-semibold text-gray-700">Dwarf</p>
            <p className="text-xs text-gray-500">Strong & Hardy</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">👹</div>
            <p className="font-semibold text-gray-700">Orc</p>
            <p className="text-xs text-gray-500">Fierce & Brutal</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🗡️</div>
            <p className="font-semibold text-gray-700">Human</p>
            <p className="text-xs text-gray-500">Versatile & Brave</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl mb-2">🐉</div>
            <p className="font-semibold text-gray-700">Dragon</p>
            <p className="text-xs text-gray-500">Ancient & Powerful</p>
          </div>
        </div>
      </div>
    </GeneratorLayout>
  );
}

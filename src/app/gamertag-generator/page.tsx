'use client';

import { useState } from 'react';
import { GeneratorLayout } from '@/components/generator/GeneratorLayout';
import { generateGamertags } from '@/lib/name-generator';

export default function GamertagGeneratorPage() {
  const [style, setStyle] = useState('epic');

  const handleGenerate = () => {
    return generateGamertags(style, 20);
  };

  const controls = (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">Gamertag Style</label>
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
      >
        <option value="epic">Epic & Powerful</option>
        <option value="funny">Funny & Silly</option>
        <option value="random">Random Mix</option>
      </select>
    </div>
  );

  return (
    <GeneratorLayout
      title="Gamertag Generator"
      description="Create epic and memorable gamertags for Xbox, PlayStation, Steam, and all gaming platforms"
      controls={controls}
      onGenerate={handleGenerate}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Popular Gaming Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">🎮</div>
            <p className="font-semibold text-gray-700">Xbox</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🎮</div>
            <p className="font-semibold text-gray-700">PlayStation</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">💻</div>
            <p className="font-semibold text-gray-700">Steam</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <p className="font-semibold text-gray-700">Epic Games</p>
          </div>
        </div>
      </div>
    </GeneratorLayout>
  );
}

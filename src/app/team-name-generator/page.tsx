'use client';

import { useState } from 'react';
import { GeneratorLayout } from '@/components/generator/GeneratorLayout';
import { generateTeamNames } from '@/lib/name-generator';

export default function TeamNameGeneratorPage() {
  const [theme, setTheme] = useState('sports');

  const handleGenerate = () => {
    return generateTeamNames(theme, 20);
  };

  const controls = (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">Team Type</label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mb-4"
      >
        <option value="sports">Sports Team</option>
        <option value="work">Work Team</option>
        <option value="trivia">Trivia Team</option>
        <option value="random">Random</option>
      </select>
    </div>
  );

  return (
    <GeneratorLayout
      title="Team Name Generator"
      description="Generate creative and memorable team names for sports, work, trivia nights, and more"
      controls={controls}
      onGenerate={handleGenerate}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-3xl mb-2">🏆</div>
            <p className="font-semibold text-gray-700">Sports Teams</p>
            <p className="text-xs text-gray-500">Basketball, Soccer, Football</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">💼</div>
            <p className="font-semibold text-gray-700">Work Projects</p>
            <p className="text-xs text-gray-500">Team Building, Departments</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-2">🧠</div>
            <p className="font-semibold text-gray-700">Trivia Nights</p>
            <p className="text-xs text-gray-500">Pub Quiz, Game Nights</p>
          </div>
        </div>
      </div>
    </GeneratorLayout>
  );
}

'use client';

import { useState } from 'react';
import { GeneratorLayout } from '@/components/generator/GeneratorLayout';
import { generateBusinessNames } from '@/lib/name-generator';

export default function BusinessNameGeneratorPage() {
  const [keywords, setKeywords] = useState('');

  const handleGenerate = () => {
    const keywordArray = keywords
      .split(',')
      .map((k) => k.trim())
      .filter((k) => k.length > 0);
    return generateBusinessNames(keywordArray, 20);
  };

  const controls = (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">
        Enter Keywords (comma-separated)
      </label>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="e.g., tech, cloud, smart, pro"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4"
      />
      <p className="text-sm text-gray-600">
        Leave blank for random combinations or enter your own keywords for personalized results
      </p>
    </div>
  );

  return (
    <GeneratorLayout
      title="Business Name Generator"
      description="Create professional and memorable business names for your company or startup"
      controls={controls}
      onGenerate={handleGenerate}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Choose a Business Name</h2>
        <div className="space-y-3 text-gray-600">
          <div className="flex gap-3">
            <span className="text-orange-600 font-bold">1.</span>
            <p><strong>Keep it simple:</strong> Easy to spell, pronounce, and remember</p>
          </div>
          <div className="flex gap-3">
            <span className="text-orange-600 font-bold">2.</span>
            <p><strong>Make it unique:</strong> Stand out from competitors</p>
          </div>
          <div className="flex gap-3">
            <span className="text-orange-600 font-bold">3.</span>
            <p><strong>Check availability:</strong> Verify domain and social media handles</p>
          </div>
          <div className="flex gap-3">
            <span className="text-orange-600 font-bold">4.</span>
            <p><strong>Consider the future:</strong> Choose a name that can grow with your business</p>
          </div>
        </div>
      </div>
    </GeneratorLayout>
  );
}

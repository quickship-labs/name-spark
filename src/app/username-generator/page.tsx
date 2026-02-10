'use client';

import { useState } from 'react';
import { GeneratorLayout } from '@/components/generator/GeneratorLayout';
import { generateUsernames } from '@/lib/name-generator';

export default function UsernameGeneratorPage() {
  const [style, setStyle] = useState('random');

  const handleGenerate = () => {
    return generateUsernames(style, 20);
  };

  const controls = (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-gray-700">Username Style</label>
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
      >
        <option value="random">Random Mix</option>
        <option value="adjective-noun">Adjective + Noun</option>
        <option value="adjective-noun-number">Adjective + Noun + Number</option>
        <option value="verb-noun">Verb + Noun</option>
        <option value="tech">Tech Style</option>
        <option value="cool">Cool (with underscore)</option>
      </select>
    </div>
  );

  return (
    <GeneratorLayout
      title="Username Generator"
      description="Generate unique and creative usernames for social media, gaming, and online accounts"
      controls={controls}
      onGenerate={handleGenerate}
    />
  );
}

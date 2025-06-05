'use client';

import { useState } from 'react';
import Loading from './Loading';

export default function LoadingDemo() {
  const [showLoading, setShowLoading] = useState(false);

  const startDemo = () => {
    setShowLoading(true);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        藤喜建設ローディングアニメーション デモ
      </h2>
      
      <button
        onClick={startDemo}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        disabled={showLoading}
      >
        {showLoading ? 'ローディング中...' : 'ローディングアニメーションを表示'}
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <p>このボタンをクリックすると、藤喜建設のローディングアニメーションが表示されます。</p>
        <p>型枠工事をイメージした建設的なアニメーション効果をお楽しみください。</p>
      </div>

      <Loading isLoading={showLoading} onLoadingComplete={handleLoadingComplete} />
    </div>
  );
} 
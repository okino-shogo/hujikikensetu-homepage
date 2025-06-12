'use client';

import { useEffect, useState } from 'react';
import React from 'react';

export default function StagewiseClientToolbar() {
  const [toolbarElement, setToolbarElement] = useState<React.ReactElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToolbar = async () => {
      try {
        // 開発環境でのみ実行
        if (process.env.NODE_ENV !== 'development') {
          setIsLoading(false);
          return;
        }

        // Stagewise関連のパッケージが存在するかチェック
        const stagewise = await import('@stagewise/toolbar-next').catch(() => null);
        const reactPlugin = await import('@stagewise-plugins/react').catch(() => null);
        
        if (!stagewise || !reactPlugin) {
          console.warn('Stagewise packages not found. Skipping toolbar load.');
          setIsLoading(false);
          return;
        }

        const { StagewiseToolbar } = stagewise;
        const { ReactPlugin } = reactPlugin;
        
        // StagewiseToolbarが存在し、有効な関数かチェック
        if (typeof StagewiseToolbar === 'function') {
          const element = React.createElement(StagewiseToolbar, {
            config: { plugins: [ReactPlugin] }
          });
          setToolbarElement(element);
        }
      } catch (error) {
        console.warn('Stagewise toolbar failed to load:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadToolbar();
  }, []);

  // ローディング中やエラー時は何も表示しない
  if (isLoading || !toolbarElement) {
    return null;
  }

  return toolbarElement;
} 
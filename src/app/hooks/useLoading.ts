'use client';

import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  initialDelay?: number;
  minimumDuration?: number;
}

export function useLoading(options: UseLoadingOptions = {}) {
  const { initialDelay = 500, minimumDuration = 2000 } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    // 初回ロード時のみローディングを表示
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
        // ローディング完了後に少し遅延してからアニメーション開始の準備
        setTimeout(() => {
          setIsLoadingComplete(true);
        }, 500);
      }, initialDelay + minimumDuration);

      return () => clearTimeout(timer);
    }
  }, [initialDelay, minimumDuration, isInitialLoad]);

  const startLoading = () => {
    setIsLoading(true);
    setIsLoadingComplete(false);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    handleLoadingComplete,
    isInitialLoad,
    isLoadingComplete,
  };
} 
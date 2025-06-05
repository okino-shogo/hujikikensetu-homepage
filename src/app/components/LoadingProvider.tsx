'use client';

import { createContext, useContext, ReactNode } from 'react';
import Loading from './Loading';
import { useLoading } from '../hooks/useLoading';

interface LoadingContextType {
  isLoading: boolean;
  isLoadingComplete: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const { isLoading, startLoading, stopLoading, handleLoadingComplete, isLoadingComplete } = useLoading({
    initialDelay: 300,
    minimumDuration: 2500,
  });

  const contextValue: LoadingContextType = {
    isLoading,
    isLoadingComplete,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      <Loading isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      <div style={{ 
        opacity: isLoading ? 0 : 1, 
        transition: 'opacity 0.5s ease-in-out',
        visibility: isLoading ? 'hidden' : 'visible'
      }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
} 
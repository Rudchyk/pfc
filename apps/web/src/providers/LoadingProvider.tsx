'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

import { GlobalLoader } from '@/components/feedback/GlobalLoader';

type BeginLoading = () => () => void;

const LoadingContext = createContext<BeginLoading | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [pending, setPending] = useState(0);

  const beginLoading = useCallback<BeginLoading>(() => {
    setPending((count) => count + 1);

    let released = false;

    return () => {
      if (released) return;
      released = true;
      setPending((count) => Math.max(0, count - 1));
    };
  }, []);

  return (
    <LoadingContext.Provider value={beginLoading}>
      {children}
      {pending > 0 && <GlobalLoader />}
    </LoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  const beginLoading = useContext(LoadingContext);

  if (!beginLoading) {
    throw new Error('useGlobalLoading must be used inside LoadingProvider');
  }

  return beginLoading;
}

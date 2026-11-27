'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { LoadingProvider } from '@/providers/LoadingProvider';
import { NotificationProvider } from '@/providers/NotificationProvider';
import theme from '@/theme/theme';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme} defaultMode="system" modeStorageKey="pfc-mode">
        <CssBaseline />
        <NotificationProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

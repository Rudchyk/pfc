import Container from '@mui/material/Container';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { AppProviders } from '@/providers/AppProviders';
import { GlobalErrorDemo } from '@/components/feedback/GlobalErrorDemo';

import './globals.css';

export const metadata: Metadata = {
  title: 'PFC',
  description: 'Project Foundation Canon',
  icons: { icon: '/mark.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="system" modeStorageKey="pfc-mode" />
        <AppProviders>
          <SiteHeader />
          <Container
            component="main"
            id="main-content"
            maxWidth="lg"
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', py: 4 }}
          >
            <GlobalErrorDemo />
            {children}
          </Container>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}

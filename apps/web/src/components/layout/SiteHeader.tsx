'use client';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/layout/ThemeSwitcher';

export function SiteHeader() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            color="text.primary"
            sx={{ textDecoration: 'none', fontWeight: 700 }}
          >
            PFC
          </Typography>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

'use client';

import LinearProgress from '@mui/material/LinearProgress';

export function GlobalLoader() {
  return (
    <LinearProgress
      aria-label="Завантаження"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.snackbar + 1,
        pointerEvents: 'none',
      }}
    />
  );
}

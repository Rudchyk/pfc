'use client';

import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { globalErrorDemoPath } from '@/config/demo-navigation';

export function GlobalErrorDemo() {
  const pathname = usePathname();
  const [failed, setFailed] = useState(false);

  if (pathname !== globalErrorDemoPath) {
    return null;
  }

  if (failed) {
    throw new Error('Intentional global error demonstration');
  }

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => setFailed(true)}
      sx={{ alignSelf: 'flex-start', mb: 3 }}
    >
      Викликати глобальну помилку
    </Button>
  );
}

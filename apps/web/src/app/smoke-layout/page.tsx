'use client';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function SmokeLayoutPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        Демонстрація Layout
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant={!expanded ? 'contained' : 'outlined'} onClick={() => setExpanded(false)}>
          Коротка сторінка
        </Button>

        <Button variant={expanded ? 'contained' : 'outlined'} onClick={() => setExpanded(true)}>
          Довга сторінка
        </Button>
      </Stack>

      {Array.from({ length: expanded ? 20 : 1 }, (_, index) => (
        <Paper key={index} variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h6">Блок {index + 1}</Typography>

          <Typography color="text.secondary">
            Демонстраційний контент для перевірки розташування Footer.
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
}

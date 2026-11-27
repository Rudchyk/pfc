'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

type StatusPageProps = {
  code: string;
  title: string;
  description: string;
  onRetry?: () => void;
};

export function StatusPage({ code, title, description, onRetry }: StatusPageProps) {
  return (
    <Stack
      spacing={2}
      sx={{ flex: 1, alignItems: 'center', textAlign: 'center', justifyContent: 'center', py: 6 }}
    >
      <Typography variant="h2" component="p" color="text.secondary">
        {code}
      </Typography>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {onRetry && (
          <Button variant="contained" onClick={onRetry}>
            Спробувати ще раз
          </Button>
        )}
        <Button component={Link} href="/" variant={onRetry ? 'outlined' : 'contained'}>
          На головну
        </Button>
      </Stack>
    </Stack>
  );
}

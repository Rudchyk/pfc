'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useGlobalLoading } from '@/providers/LoadingProvider';
import { useNotifier } from '@/providers/NotificationProvider';

export default function DemoGlobalLoadingPage() {
  const beginLoading = useGlobalLoading();
  const notify = useNotifier();

  async function runOperation(duration: number) {
    const finish = beginLoading();

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, duration));

      notify(`Операцію завершено (${duration / 1000} с).`, 'success');
    } finally {
      finish();
    }
  }

  async function runFailedOperation() {
    const finish = beginLoading();

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 2000));

      throw new Error('Intentional operation failure');
    } catch {
      notify('Операція завершилася помилкою.', 'error');
    } finally {
      finish();
    }
  }

  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <Typography variant="h4" component="h1">
        Демонстрація глобального завантаження
      </Typography>

      <Button variant="contained" onClick={() => void runOperation(3000)}>
        Операція на 3 секунди
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          void runOperation(2000);
          void runOperation(5000);
        }}
      >
        Дві паралельні операції
      </Button>

      <Button variant="outlined" color="error" onClick={() => void runFailedOperation()}>
        Операція з помилкою
      </Button>
    </Stack>
  );
}

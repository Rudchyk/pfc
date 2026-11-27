'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useNotifier } from '@/providers/NotificationProvider';

export default function DemoNotificationsPage() {
  const notify = useNotifier();

  return (
    <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
      <Typography variant="h4" component="h1">
        Демонстрація сповіщень
      </Typography>

      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => notify('Операцію виконано успішно.', 'success')}
        >
          Success
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={() => notify('Інформаційне повідомлення.', 'info')}
        >
          Info
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => notify('Зверніть увагу.', 'warning')}
        >
          Warning
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => notify('Сталася помилка.', 'error')}
        >
          Error
        </Button>
      </Stack>

      <Button
        variant="outlined"
        onClick={() => {
          notify('Повідомлення 1 із 4', 'success');
          notify('Повідомлення 2 із 4', 'info');
          notify('Повідомлення 3 із 4', 'warning');
          notify('Повідомлення 4 із 4', 'error');
        }}
      >
        Перевірити чергу сповіщень
      </Button>
    </Stack>
  );
}

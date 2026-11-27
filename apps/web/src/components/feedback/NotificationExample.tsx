'use client';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Button from '@mui/material/Button';

import { useNotifier } from '@/providers/NotificationProvider';

export function NotificationExample() {
  const notify = useNotifier();

  return (
    <Button
      variant="outlined"
      startIcon={<NotificationsOutlinedIcon />}
      onClick={() => notify('Сповіщення працюють.', 'success')}
    >
      Перевірити сповіщення
    </Button>
  );
}

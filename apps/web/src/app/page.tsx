import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { NotificationExample } from '@/components/feedback/NotificationExample';

export default function Home() {
  return (
    <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Typography variant="h3" component="h1">
        Project Foundation Canon
      </Typography>
      <Typography color="text.secondary">Базовий вебзастосунок Next.js та Material UI.</Typography>
      <NotificationExample />
    </Stack>
  );
}

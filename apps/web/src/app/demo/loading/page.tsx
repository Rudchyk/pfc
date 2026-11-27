import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { connection } from 'next/server';

export default async function DemoLoadingPage() {
  await connection();
  await new Promise<void>((resolve) => setTimeout(resolve, 3000));

  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        Демонстрація завантаження
      </Typography>
      <Typography color="success.main">Завантаження успішно завершено.</Typography>
    </Stack>
  );
}

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function DemoGlobalErrorPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        Демонстрація Global Error
      </Typography>

      <Typography color="text.secondary">
        Натисніть кнопку для демонстрації глобальної обробки помилок.
      </Typography>
    </Stack>
  );
}

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const;

export default function DemoThemePage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        Демонстрація теми
      </Typography>
      <Typography color="text.secondary">
        Використайте перемикач у header, щоб переглянути світлу, темну та системну тему.
      </Typography>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography variant="h5" component="h2">
            Типографіка
          </Typography>
          <Typography variant="body1">Основний текст.</Typography>
          <Typography variant="body2" color="text.secondary">
            Другорядний текст.
          </Typography>
        </Stack>
      </Paper>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))' },
          gap: 2,
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            sx={{
              bgcolor: `${color}.main`,
              color: `${color}.contrastText`,
              p: 2,
              borderRadius: 1,
            }}
          >
            {color}
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

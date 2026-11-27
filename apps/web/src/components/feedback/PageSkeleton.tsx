import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function PageSkeleton() {
  return (
    <Box role="status" aria-label="Завантаження сторінки" aria-busy="true">
      <Stack spacing={2} aria-hidden="true">
        <Skeleton variant="text" width="60%" height={48} />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="75%" />
        <Skeleton variant="rounded" height={160} />
      </Stack>
    </Box>
  );
}

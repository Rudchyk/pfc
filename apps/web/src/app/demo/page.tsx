'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { demoNavigation } from '@/config/demo-navigation';

export default function DemoPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        Демонстрації PFC
      </Typography>
      <Typography color="text.secondary">
        Базові системні компоненти вебзастосунку та приклади їх використання.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
          gap: 2,
        }}
      >
        {demoNavigation.map(({ href, label, description }) => (
          <Card key={href} variant="outlined">
            <CardActionArea component={Link} href={href} prefetch={false} sx={{ height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Typography variant="h6" component="h2" sx={{ flex: 1 }}>
                    {label}
                  </Typography>
                  <ArrowForwardIcon color="action" aria-hidden="true" />
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}

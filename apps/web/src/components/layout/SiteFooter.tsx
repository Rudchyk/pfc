import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" textAlign="center">
          © {new Date().getUTCFullYear()} PFC. Усі права захищено.
        </Typography>
      </Container>
    </Box>
  );
}

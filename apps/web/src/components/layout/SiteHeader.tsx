'use client';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ThemeSwitcher } from '@/components/layout/ThemeSwitcher';
import { demoNavigation } from '@/config/demo-navigation';

function HeaderContent({ desktop }: { desktop: boolean }) {
  const pathname = usePathname();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const demoActive = pathname === '/demo' || pathname.startsWith('/demo/');
  const menuOpen = desktop && Boolean(anchor);
  const mobileOpen = !desktop && drawerOpen;

  const closeMenu = () => setAnchor(null);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: { xs: 1, md: 2 } }}>
          <IconButton
            edge="start"
            aria-label="Відкрити меню"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? 'mobile-navigation' : undefined}
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            color="text.primary"
            sx={{ textDecoration: 'none', fontWeight: 700, flexShrink: 0 }}
          >
            PFC
          </Typography>

          <Box
            component="nav"
            aria-label="Основна навігація"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}
          >
            <Button
              component={Link}
              href="/"
              color={pathname === '/' ? 'primary' : 'inherit'}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Головна
            </Button>
            <Button
              id="demo-menu-trigger"
              color={demoActive ? 'primary' : 'inherit'}
              endIcon={<KeyboardArrowDownIcon />}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? 'desktop-demo-menu' : undefined}
              onClick={(event) => setAnchor(event.currentTarget)}
            >
              Демонстрації
            </Button>
          </Box>

          <Box sx={{ flex: 1 }} />
          <ThemeSwitcher />
        </Toolbar>
      </Container>

      <Menu
        anchorEl={anchor}
        open={menuOpen}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          list: { id: 'desktop-demo-menu', 'aria-labelledby': 'demo-menu-trigger' },
        }}
      >
        <MenuItem
          component={Link}
          href="/demo"
          selected={pathname === '/demo'}
          aria-current={pathname === '/demo' ? 'page' : undefined}
          onClick={closeMenu}
        >
          Усі демонстрації
        </MenuItem>
        <Divider component="li" />
        {demoNavigation.map(({ href, label }) => (
          <MenuItem
            key={href}
            component={Link}
            href={href}
            prefetch={false}
            selected={pathname === href}
            aria-current={pathname === href ? 'page' : undefined}
            onClick={closeMenu}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>

      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={closeDrawer}
        slotProps={{
          paper: {
            id: 'mobile-navigation',
            role: 'dialog',
            'aria-modal': true,
            'aria-labelledby': 'mobile-navigation-title',
            sx: { width: '100%', maxWidth: 'none', height: '100%' },
          },
        }}
      >
        <Toolbar sx={{ gap: 1, borderBottom: 1, borderColor: 'divider' }}>
          <IconButton edge="start" aria-label="Закрити меню" onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
          <Typography id="mobile-navigation-title" variant="h6" sx={{ flex: 1 }}>
            Меню
          </Typography>
          <ThemeSwitcher />
        </Toolbar>

        <Box component="nav" aria-label="Мобільна навігація" sx={{ overflowY: 'auto', flex: 1 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/"
                selected={pathname === '/'}
                aria-current={pathname === '/' ? 'page' : undefined}
                onClick={closeDrawer}
              >
                <ListItemText primary="Головна" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/demo"
                selected={pathname === '/demo'}
                aria-current={pathname === '/demo' ? 'page' : undefined}
                onClick={closeDrawer}
              >
                <ListItemText primary="Усі демонстрації" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List aria-label="Демонстрації">
            {demoNavigation.map(({ href, label }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={href}
                  prefetch={false}
                  selected={pathname === href}
                  aria-current={pathname === href ? 'page' : undefined}
                  onClick={closeDrawer}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export function SiteHeader() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return <HeaderContent key={desktop ? 'desktop' : 'mobile'} desktop={desktop} />;
}

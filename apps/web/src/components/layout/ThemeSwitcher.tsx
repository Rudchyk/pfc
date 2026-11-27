'use client';

import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useColorScheme } from '@mui/material/styles';

export function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  return (
    <ToggleButtonGroup
      size="small"
      exclusive
      value={mode ?? null}
      disabled={mode === undefined}
      aria-label="Тема оформлення"
      onChange={(_, value: unknown) => {
        if (value === 'light' || value === 'dark' || value === 'system') setMode(value);
      }}
    >
      <ToggleButton value="light" aria-label="Світла тема" title="Світла тема">
        <LightModeOutlinedIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Темна тема" title="Темна тема">
        <DarkModeOutlinedIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="system" aria-label="Системна тема" title="Системна тема">
        <BrightnessAutoOutlinedIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

'use client';

import Alert, { type AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';

type Notify = (message: string, severity?: AlertColor) => void;

type Notification = {
  id: number;
  message: string;
  severity: AlertColor;
};

const NotificationContext = createContext<Notify | null>(null);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<Notification[]>([]);
  const nextId = useRef(0);

  const notify = useCallback<Notify>((message, severity = 'info') => {
    const id = ++nextId.current;
    setQueue((current) => [...current, { id, message, severity }]);
  }, []);

  const dismiss = useCallback((id: number) => {
    setQueue((current) => current.filter((item) => item.id !== id));
  }, []);

  const current = queue[0];

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      {current && (
        <Snackbar
          key={current.id}
          open
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={(_, reason) => {
            if (reason !== 'clickaway') dismiss(current.id);
          }}
        >
          <Alert severity={current.severity} onClose={() => dismiss(current.id)} variant="filled">
            {current.message}
          </Alert>
        </Snackbar>
      )}
    </NotificationContext.Provider>
  );
}

export function useNotifier() {
  const notify = useContext(NotificationContext);

  if (!notify) {
    throw new Error('useNotifier must be used inside NotificationProvider');
  }

  return notify;
}

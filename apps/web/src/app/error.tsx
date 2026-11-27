'use client';

import { StatusPage } from '@/components/feedback/StatusPage';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <StatusPage
      code="Помилка"
      title="Не вдалося завантажити сторінку"
      description="Спробуйте ще раз або поверніться на головну."
      onRetry={reset}
    />
  );
}

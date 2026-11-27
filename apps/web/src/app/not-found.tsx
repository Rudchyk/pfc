import { StatusPage } from '@/components/feedback/StatusPage';

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Сторінку не знайдено"
      description="Перевірте адресу або поверніться на головну."
    />
  );
}

import { GlobalLoader } from '@/components/feedback/GlobalLoader';
import { PageSkeleton } from '@/components/feedback/PageSkeleton';

export default function Loading() {
  return (
    <>
      <GlobalLoader />
      <PageSkeleton />
    </>
  );
}

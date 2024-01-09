import DashboardSkeleton from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overview'
};

export default function Loading() {
  return <DashboardSkeleton />;
}

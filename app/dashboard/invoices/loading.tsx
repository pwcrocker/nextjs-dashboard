import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices'
};

export default function Loading() {
  return <InvoicesTableSkeleton />;
}

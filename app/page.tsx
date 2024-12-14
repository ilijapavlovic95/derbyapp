import { HomeNavigation } from '@/components/Navigation';
import { LibCard } from '@/components/ui/card';
import { LibHeading } from '@/components/ui/heading';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <HomeNavigation />
    </main>
  );
}

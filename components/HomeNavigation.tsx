'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { LibCard } from './lib/card';

const HomeNavigationItem = ({
  path,
  label,
}: {
  path: string;
  label: string;
}) => {
  return (
    <Link href={path}>
      <LibCard clickable>
        <h1>{label}</h1>
        <ArrowRightIcon className="h-6 w-6" />
      </LibCard>
    </Link>
  );
};

export const HomeNavigation = () => {
  return (
    <div className="flex flex-col gap-3">
      <HomeNavigationItem
        path="/predictions"
        label="Make prediction"
      />
      <hr className="mx-20 my-2" />
      <HomeNavigationItem
        path="/admin/manage"
        label="Manage predictions"
      />
    </div>
  );
};

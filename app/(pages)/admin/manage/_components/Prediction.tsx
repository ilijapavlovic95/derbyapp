import { LibCard } from '@/components/lib/card';
import { PredictionCard, PredictionTeamType } from './PredictionCard';
import { ArrowsRightLeftIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { getTextRepresentationOfDatesDiff } from '../_utils/date-utils';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { PencilIcon } from '@heroicons/react/24/outline';

export enum PredictionStatusEnum {
  OPEN = 'open',
  CLOSED = 'closed',
}

export type PredictionType = {
  teams: PredictionTeamType[];
  date: string;
  status: PredictionStatusEnum;
};

const PredictionTeamWithActions = ({
  team,
  isPredictionOpen,
}: {
  team: PredictionTeamType;
  isPredictionOpen: boolean;
}) => {
  const predictionOpenActions = (
    <>
      <Button
        size="lg"
        variant="surface"
        className="hover:bg-gray-100"
      >
        <PencilIcon className="size-6" />
      </Button>
      <Button
        size="lg"
        variant="surface"
        className="hover:bg-gray-100"
      >
        <ArrowsRightLeftIcon className="size-6" />
      </Button>
    </>
  );

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <PredictionCard {...team} />

      {isPredictionOpen && predictionOpenActions}
    </div>
  );
};

export const Prediction = ({
  teams,
  date,
  status,
}: {
  teams: PredictionTeamType[];
  date: string;
  status: PredictionStatusEnum;
}) => {
  const homeTeam = teams[0];
  const awayTeam = teams[1];

  const [timer, setTimer] = useState<string>();

  const isPredictionOpen = status === PredictionStatusEnum.OPEN;

  useEffect(() => {
    if (!isPredictionOpen) {
      return;
    }

    const interval = setInterval(() => {
      setTimer(
        getTextRepresentationOfDatesDiff(new Date().toISOString(), date)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <LibCard
      clickable={false}
      noPadding
    >
      <div className="flex w-full flex-col items-center">
        {/* HEADER */}
        <div className="flex w-full items-center justify-between bg-gray-100 px-4 py-2 uppercase">
          {isPredictionOpen && <span>{timer}</span>}
          <span className="flex items-center gap-1 text-xl">
            {isPredictionOpen ? (
              <>
                open <ClockIcon className="size-8" />
              </>
            ) : (
              <>
                closed <LockClosedIcon className="size-8" />
              </>
            )}
          </span>
        </div>
        <hr className="w-full" />
        {/* CONTENT */}
        <div className="flex w-full flex-col items-center gap-1 p-4">
          <PredictionTeamWithActions
            team={homeTeam}
            isPredictionOpen={isPredictionOpen}
          />
          {/* <span className="font-alfa flex items-center justify-center text-sm">
            vs
          </span> */}
          <PredictionTeamWithActions
            team={awayTeam}
            isPredictionOpen={isPredictionOpen}
          />
        </div>
      </div>
    </LibCard>
  );
};

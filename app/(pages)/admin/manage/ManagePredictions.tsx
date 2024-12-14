'use client';

import { Provider } from '@/components/ui/provider';
import { PredictionTeam } from './_components/PredictionTeam';

export const ManagePredictions = () => {
  return (
    <Provider>
      <PredictionTeam />
    </Provider>
  );
};

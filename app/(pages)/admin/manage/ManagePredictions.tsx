'use client';

import { Provider } from '@/components/ui/provider';
import { PredictionTeam } from './_components/PredictionTeam';
import { Prediction, PredictionStatusEnum } from './_components/Prediction';
import { PredictionTeamType } from './_components/PredictionCard';

const mockTeams: PredictionTeamType[] = [
  {
    name: 'Chiefs',
    backgroundColor: '#E31837',
    textColor: '#FFB81C',
    imageUrl:
      'https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC',
  },
  {
    name: 'Bills',
    backgroundColor: '#00338D',
    textColor: '#C60C30',
    imageUrl:
      'https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF',
  },
];

export const ManagePredictions = () => {
  return (
    <Provider>
      <Prediction
        teams={mockTeams}
        date="2024-12-23T15:00:00.000Z"
        status={PredictionStatusEnum.OPEN}
      />
    </Provider>
  );
};

'use client';

import { useState } from 'react';

import { GameTeam, Team } from './GameTeam';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export type PredictionResult = 'home' | 'away' | 'draw';

type Props = {
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  savedPrediction?: PredictionResult;
  predictionResult?: PredictionResult;
};

const PredictionResultOverlay = ({
  predictionResult,
  savedPrediction,
}: {
  predictionResult?: PredictionResult;
  savedPrediction?: PredictionResult;
}) => {
  const isPredictionCorrect = predictionResult === savedPrediction;

  const correctPredictionClass = 'backdrop-grayscale bg-success bg-opacity-10';
  const failedPredictionClass = 'backdrop-grayscale bg-danger bg-opacity-10';

  return (
    <div
      className={`absolute left-0 top-0 z-20 h-full w-full ${isPredictionCorrect ? correctPredictionClass : failedPredictionClass} flex items-center justify-center`}
    >
      <div className="p-0.1 rounded-full bg-white">
        {isPredictionCorrect ? (
          <CheckCircleIcon className="h-10 w-10 text-success" />
        ) : (
          <XCircleIcon className="h-10 w-10 text-danger" />
        )}
      </div>
    </div>
  );
};

export const Game = ({
  homeTeam,
  awayTeam,
  predictionResult,
  savedPrediction,
}: Props) => {
  const [userPrediction, setUserPrediction] = useState<
    PredictionResult | undefined
  >(savedPrediction);

  const wrapperBorderClass = () => {
    if (!predictionResult) {
      return '';
    }

    if (predictionResult === savedPrediction) {
      return 'border-success border-4';
    }

    return 'border-danger border-4';
  };

  return (
    <div
      className={`relative flex justify-between overflow-hidden rounded border ${wrapperBorderClass()}`}
    >
      <div className="w-1/2">
        <GameTeam
          {...homeTeam}
          onTeamSelect={() => setUserPrediction('home')}
          highlighted={userPrediction === 'home'}
          disabled={!!predictionResult}
        />
      </div>

      {predictionResult && (
        <PredictionResultOverlay
          predictionResult={predictionResult}
          savedPrediction={savedPrediction}
        />
      )}

      <div className="w-1/2">
        <GameTeam
          {...awayTeam}
          alignedRight
          onTeamSelect={() => setUserPrediction('away')}
          highlighted={userPrediction === 'away'}
          disabled={!!predictionResult}
        />
      </div>
    </div>
  );
};

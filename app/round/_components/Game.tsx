'use client';

import { useState } from "react";

import { GameTeam, Team } from "./GameTeam";

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'


export type PredictionResult = 'home' | 'away' | 'draw';

type Props = {
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  savedPrediction?: PredictionResult;
  predictionResult?: PredictionResult;
};

const PredictionResultOverlay = ({ predictionResult, savedPrediction }: { predictionResult?: PredictionResult, savedPrediction?: PredictionResult }) => {

  const isPredictionCorrect = predictionResult === savedPrediction;

  const correctPredictionClass = 'backdrop-grayscale bg-success bg-opacity-10';
  const failedPredictionClass = 'backdrop-grayscale bg-danger bg-opacity-10';

  return <div className={`absolute z-20 top-0 left-0 w-full h-full ${isPredictionCorrect ? correctPredictionClass : failedPredictionClass} flex justify-center items-center`}>
    <div className="p-0.1 bg-white rounded-full">
      {
        isPredictionCorrect ?
          <CheckCircleIcon className="w-10 h-10 text-success" />
          : <XCircleIcon className="w-10 h-10 text-danger" />
      }
    </div>
  </div>
}

export const Game = ({ homeTeam, awayTeam, predictionResult, savedPrediction }: Props) => {

  const [userPrediction, setUserPrediction] = useState<PredictionResult | undefined>(savedPrediction);

  const wrapperBorderClass = () => {

    if (!predictionResult) {
      return '';
    }

    if (predictionResult === savedPrediction) {
      return 'border-success border-4';
    }

    return 'border-danger border-4';
  }


  return <div className={`flex justify-between relative border rounded overflow-hidden ${wrapperBorderClass()}`}>
    <div className="w-1/2">
      <GameTeam {...homeTeam} onTeamSelect={() => setUserPrediction('home')} highlighted={userPrediction === 'home'} disabled={!!predictionResult} />
    </div>

    {
      predictionResult && <PredictionResultOverlay predictionResult={predictionResult} savedPrediction={savedPrediction} />
    }



    <div className="w-1/2">
      <GameTeam {...awayTeam} alignedRight onTeamSelect={() => setUserPrediction('away')} highlighted={userPrediction === 'away'} disabled={!!predictionResult} />
    </div>
  </div>;
};
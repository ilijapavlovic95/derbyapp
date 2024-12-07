'use client';

import { useState } from "react";

import { GameTeam, Team } from "./GameTeam";

export type PredictionResult = 'home' | 'away' | 'draw';

type Props = {
  homeTeam: Team;
  awayTeam: Team;
  predictionResult?: PredictionResult;
};

export const Game = ({ homeTeam, awayTeam, predictionResult }: Props) => {

  const [predictedWinner, setPredictedWinner] = useState<PredictionResult | undefined>();


  return <div className="flex justify-between relative border rounded overflow-hidden">
    <div className="w-1/2">
      <GameTeam {...homeTeam} onTeamSelect={() => setPredictedWinner('home')} highlighted={predictedWinner === 'home'} />
    </div>
    {/* <span className="font-alfa absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white py-0.5 px-1 pb-1 z-20 rounded-full">
      {getPredictionResultElement()}
    </span> */}
    <div className="w-1/2">
      <GameTeam {...awayTeam} alignedRight onTeamSelect={() => setPredictedWinner('away')} highlighted={predictedWinner === 'away'} />
    </div>
  </div>;
};
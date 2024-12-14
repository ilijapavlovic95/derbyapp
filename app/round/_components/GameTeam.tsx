import { useEffect } from 'react';
import { isNumberObject } from 'util/types';

export type Team = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  image?: string;
};

type Props = Team & {
  alignedRight?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  score?: number;
  onTeamSelect: () => void;
};

export const GameTeam = ({
  name,
  primaryColor,
  secondaryColor,
  image,
  alignedRight,
  highlighted,
  disabled,
  onTeamSelect,
}: Props) => {
  const styleColors = {
    backgroundColor: primaryColor,
    color: secondaryColor,
  };

  return (
    <div
      className="font-alfa relative flex h-16 w-full items-center justify-center p-2"
      style={styleColors}
    >
      {image && (
        <img
          className={`absolute top-0 ${alignedRight ? 'right-0' : 'left-0'} h-full scale-125`}
          src={image}
        />
      )}
      {name}

      {!highlighted && (
        <button
          className="absolute left-0 top-0 h-full w-full bg-white/50"
          disabled={disabled}
          onClick={onTeamSelect}
        ></button>
      )}
    </div>
  );
};

import { useEffect } from "react";
import { isNumberObject } from "util/types";

export type Team = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  image?: string;
}

type Props = Team & {
  alignedRight?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  score?: number;
  onTeamSelect: () => void
}

export const GameTeam = ({ name, primaryColor, secondaryColor, image, alignedRight, highlighted, disabled, onTeamSelect }: Props) => {

  const styleColors = {
    backgroundColor: primaryColor,
    color: secondaryColor
  }

  return <div className="font-alfa w-full p-2 flex justify-center items-center h-16 relative" style={styleColors}>

    {image && <img className={`absolute top-0 ${alignedRight ? 'right-0' : 'left-0'} h-full scale-125`} src={image} />}
    {name}


    {!highlighted && <button className="absolute top-0 left-0 w-full h-full bg-white/50" disabled={disabled} onClick={onTeamSelect}></button>}

  </div>;

};
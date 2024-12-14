export type PredictionTeamType = {
  name: string;
  backgroundColor: string;
  textColor: string;
  imageUrl?: string;
};

export const PredictionCard = (props: PredictionTeamType) => {
  return (
    <div
      className="font-alfa relative flex h-12 w-full items-center justify-center overflow-hidden rounded tracking-wider"
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      {props.imageUrl && (
        <img
          className="absolute left-1/2 top-1/2 h-40 -translate-x-1/2 -translate-y-1/2 opacity-10"
          src={props.imageUrl}
        />
      )}

      <span className="z-20">{props.name}</span>
    </div>
  );
};

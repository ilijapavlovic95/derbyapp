import { LibCard } from '@/components/lib/card';
import { LibInput } from '@/components/lib/input';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { PredictionTeamType } from './PredictionCard';
import { LibOutlineButton, LibPrimaryButton } from '@/components/lib/button';

const PredictionCardPicker = ({
  onChange,
}: {
  onChange: (selectedTeam: PredictionTeamType) => void;
}) => {
  return (
    <button className="relative flex h-12 w-full items-center justify-center overflow-hidden rounded bg-gray-100 uppercase tracking-wider hover:bg-gray-200">
      <span>Pick team/player</span>
    </button>
  );
};

const NewPredictionForm = ({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void;
  onSubmit: () => void;
}) => {
  const [date, setDate] = useState<string>();

  return (
    <LibCard clickable={false}>
      <div className="flex w-full flex-col gap-3">
        <Field
          required
          label="Date (YYYY-MM-DD HH:MM)"
          helperText="Use your local timezone"
        >
          <LibInput
            variant="outline"
            placeholder="2024-12-25 17:00"
            onChange={(e) => setDate(e.target.value)}
          />
        </Field>
        <Field
          required
          label="Home team/Player 1"
        >
          <PredictionCardPicker onChange={() => {}} />
        </Field>
        <Field
          required
          label="Away team/Player 2"
        >
          <PredictionCardPicker onChange={() => {}} />
        </Field>
        <hr />
        <div className="flex w-full gap-3">
          <LibOutlineButton
            className="flex-1"
            onClick={onCancel}
          >
            Cancel
          </LibOutlineButton>
          <LibPrimaryButton
            className="flex-1"
            onClick={onSubmit}
          >
            Save
          </LibPrimaryButton>
        </div>
      </div>
    </LibCard>
  );
};

export const AddPrediction = () => {
  const [inProgress, setInProgress] = useState(false);

  if (inProgress) {
    return (
      <NewPredictionForm
        onCancel={() => setInProgress(false)}
        onSubmit={() => {}}
      />
    );
  }

  return (
    <LibPrimaryButton
      size="xl"
      className="text-lg"
      onClick={() => setInProgress(true)}
    >
      Add Game
      <PlusIcon className="size-6" />
    </LibPrimaryButton>
  );
};

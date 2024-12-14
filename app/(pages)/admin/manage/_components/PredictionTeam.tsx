import { LibCard } from '@/components/lib/card';
import { LibColorPicker } from '@/components/lib/color-picker';
import { LibInput } from '@/components/lib/input';
import { Field } from '@/components/ui/field';
import { PredictionCard, PredictionTeamType } from './PredictionCard';
import { useState } from 'react';
import { parseColor } from '@chakra-ui/react';

export const PredictionTeam = () => {
  const [data, setData] = useState<PredictionTeamType>({
    name: 'Some Team',
    backgroundColor: '#E31837',
    textColor: '#FFB81C',
  });

  return (
    <LibCard clickable={false}>
      <div className="flex w-full flex-col gap-3">
        <Field label="Display name">
          <LibInput
            variant="outline"
            placeholder="Display name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Field>

        <Field label="Background color">
          <LibColorPicker
            defaultValue={parseColor(data.backgroundColor)}
            onValueChangeEnd={(e) =>
              setData({ ...data, backgroundColor: e.value.toString('hex') })
            }
          />
        </Field>

        <Field label="Text color">
          <LibColorPicker
            defaultValue={parseColor(data.textColor)}
            onValueChangeEnd={(e) =>
              setData({ ...data, textColor: e.value.toString('hex') })
            }
          />
        </Field>

        <Field
          label="Logo URL"
          helperText="For the best results, use a transparent image"
        >
          <LibInput
            variant="outline"
            placeholder="https://www.someurl.com/logo.png"
            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
          />
        </Field>

        <Field
          label="Preview"
          helperText="This is how it will look to the users"
        >
          <PredictionCard {...data} />
        </Field>
      </div>
    </LibCard>
  );
};

import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from '@/components/ui/color-picker';
import { ColorPickerRootProps } from '@chakra-ui/react';

export const LibColorPicker = (props: ColorPickerRootProps) => {
  return (
    <ColorPickerRoot {...props}>
      <ColorPickerControl>
        <ColorPickerInput className="rounded border-gray-300" />
        <ColorPickerTrigger />
      </ColorPickerControl>
      <ColorPickerContent>
        <ColorPickerArea />
        <ColorPickerEyeDropper />
        <ColorPickerSliders />
      </ColorPickerContent>
    </ColorPickerRoot>
  );
};

import { Input, InputProps } from '@chakra-ui/react';

export const LibInput = (props: InputProps) => {
  return (
    <Input
      className="rounded-md border-gray-300"
      {...props}
    />
  );
};

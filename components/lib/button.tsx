import { Button, ButtonProps } from '../ui/button';

export const LibPrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      variant="solid"
      size="sm"
      {...props}
      className={
        `bg-primary text-sm uppercase text-white hover:opacity-90 ` +
        props.className
      }
    />
  );
};

export const LibOutlineButton = (props: ButtonProps) => {
  return (
    <Button
      variant="surface"
      size="sm"
      {...props}
      className={
        `flex-1 text-sm uppercase hover:bg-gray-100 ` + props.className
      }
    />
  );
};

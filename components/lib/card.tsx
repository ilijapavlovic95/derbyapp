export const LibCard = ({
  children,
  clickable,
  noPadding,
}: {
  children: React.ReactNode;
  clickable?: boolean;
  noPadding?: boolean;
}) => {
  return (
    <div
      id="card"
      className={
        `flex items-center justify-center justify-between rounded-lg border border-gray-200 bg-white text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100` +
        (clickable
          ? ' cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
          : '') +
        (noPadding ? ' p-0' : ' p-6')
      }
    >
      {children}
    </div>
  );
};

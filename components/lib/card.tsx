export const LibCard = ({
  children,
  clickable,
}: {
  children: React.ReactNode;
  clickable?: boolean;
}) => {
  return (
    <div
      id="card"
      className={
        `flex items-center justify-center justify-between rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100` +
        (clickable
          ? ' cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
          : '')
      }
    >
      {children}
    </div>
  );
};

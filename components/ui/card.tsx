export const LibCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="card"
      className="flex cursor-pointer items-center justify-center justify-between rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      {children}
    </div>
  );
};

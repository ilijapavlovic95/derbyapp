export const LibHeading = ({ children, level }: { children: React.ReactNode, level: number }) => {
  if (level === 1) {
    return (
      <h1 className="text-4xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 className="text-3xl font-bold leading-tight tracking-tighter text-gray-900">
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 className="text-2xl font-bold leading-tight tracking-tighter text-gray-900">
        {children}
      </h3>
    );
  }
}
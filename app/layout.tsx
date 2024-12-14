import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen justify-center">
          <div className="w-full md:w-3/5">{children}</div>
        </div>
      </body>
    </html>
  );
}

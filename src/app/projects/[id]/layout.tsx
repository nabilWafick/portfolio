export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed mx-2 top-16 left-0 right-0 z-10  "></div>
      <main className="min-h-screen pt-28">{children}</main>
    </>
  );
}

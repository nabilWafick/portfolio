import { Nav } from '@/components/Nav';

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        {children}
      </main>
    </>
  );
}

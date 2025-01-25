import { Nav } from '@/components/Nav';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="fixed top-16 left-0 right-0 bg-[#0a192f] z-10 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/archive"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-[#64ffda] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Archive
          </Link>
        </div>
      </div>
      <main className="min-h-screen pt-28">
        {children}
      </main>
    </>
  );
}

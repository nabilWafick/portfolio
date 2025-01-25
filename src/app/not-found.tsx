import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] px-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#64ffda] mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-[#8892b0] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors inline-block"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

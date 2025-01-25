'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] px-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#64ffda] mb-4">
          Something went wrong!
        </h2>
        <p className="text-[#8892b0] mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
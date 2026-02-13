"use client";

import { useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground text-center max-w-md">
        This page failed to load. You can try again or go back home.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg border border-border font-medium hover:bg-muted"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

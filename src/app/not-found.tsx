import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">Go home</Link>
      </div>
    </div>
  );
}




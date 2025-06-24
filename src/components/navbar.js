import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-green-700">
          <Link href="/">My Smart Office</Link>
        </div>
        <div className="space-x-4 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </nav>
  );
}

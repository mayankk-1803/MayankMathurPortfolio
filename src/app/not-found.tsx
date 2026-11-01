import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
          ERROR 404
        </span>
        <h1 className="font-display text-7xl sm:text-8xl text-white tracking-tighter">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm text-neutral-400 font-light leading-relaxed">
          The requested route does not exist in this editorial portfolio.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
        >
          Return to Overview
        </Link>
      </div>
    </main>
  );
}


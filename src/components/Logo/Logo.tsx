

export default function Logo({
  className = "h-8 w-auto",
  textClass = "text-slate-900",
}: {
  className?: string;
  textClass?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Mark */}
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="rounded-xl"
          aria-hidden
        >
          <defs>
            <linearGradient id="rg-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="32" height="32" rx="8" fill="url(#rg-g)" />
          {/* simple “R” route line */}
          <path
            d="M10 22c0-5 3-8 7-8h2c2 0 3 1 3 3s-1 3-3 3h-3"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="22" r="2" fill="white" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className={`select-none font-extrabold ${textClass}`}>
        <span>Ride</span>
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
          Go
        </span>
      </div>
    </div>
  );
}

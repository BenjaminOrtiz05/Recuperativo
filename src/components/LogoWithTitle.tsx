export default function LogoWithTitle() {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-12 h-12 sm:w-16 sm:h-16"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB" primitiveUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#6366f1" floodOpacity="0.6" />
          </filter>
        </defs>

        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#logo-gradient)"
          strokeWidth="5"
          filter="url(#glow)"
          className="animate-pulse-slow"
        />

        <path
          fill="url(#logo-gradient)"
          d="M20 44 L32 20 L44 44 Z"
          filter="url(#glow)"
        />
      </svg>

      {/* Texto visible solo en pantallas sm y superiores */}
      <h1 className="hidden sm:block text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight select-text">
        Glowself
      </h1>
    </div>
  );
}

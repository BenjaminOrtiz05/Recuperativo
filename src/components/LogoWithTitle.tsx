export default function LogoWithTitle() {
  return (
    <div className="flex items-center gap-4 select-none">
      {/* Logo SVG personalizado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-16 h-16"
        fill="none"
      >
        {/* Círculo exterior con degradado */}
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" stroke="url(#grad)" strokeWidth="4" />
        {/* Letras estilizadas G + S */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fill="url(#grad)"
          fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
        >
          GS
        </text>
      </svg>

      {/* Título al lado */}
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        Glowself
      </h1>
    </div>
  );
}

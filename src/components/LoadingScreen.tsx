// src/components/LoadingScreen.tsx
export default function LoadingScreen({ message = "Cargando..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      {/* Spinner con animación de giro */}
      <svg
        className="animate-spin h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="loading"
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-80"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      {/* Texto con ligera animación para captar atención */}
      <p className="mt-6 text-xl font-semibold text-primary animate-pulse">{message}</p>
    </div>
  );
}

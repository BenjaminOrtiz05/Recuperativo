"use client";

export default function SettingsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6">🚧 Mantenimiento</h1>
      <p className="max-w-xl text-lg text-gray-700 mb-8">
        Estamos realizando mejoras en el sitio para ofrecerte una mejor experiencia. 
        Por favor, vuelve más tarde. ¡Gracias por tu paciencia!
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Volver
      </button>
    </main>
  );
}

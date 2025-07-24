// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-600 p-4 text-center">
      © {new Date().getFullYear()} Glowself - Todos los derechos reservados
    </footer>
  );
}

// src/components/dashboard/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-100 p-4">
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:text-blue-600">Inicio</Link>
        <Link href="/dashboard/cursos" className="hover:text-blue-600">Cursos</Link>
        <Link href="/dashboard/contacto" className="hover:text-blue-600">Contacto</Link>
      </nav>
    </aside>
  );
}

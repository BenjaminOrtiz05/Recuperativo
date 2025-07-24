// src/components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700 cursor-pointer">
            Glowself
          </h1>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/cursos" className="hover:text-blue-600">
              Cursos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-blue-600">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

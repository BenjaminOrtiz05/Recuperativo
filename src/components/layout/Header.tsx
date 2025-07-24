// src/components/layout/Header.tsx
import Link from "next/link";
import LogoWithTitle from "@/components/LogoWithTitle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo a la izquierda */}
        <LogoWithTitle />

        {/* Navegación a la derecha */}
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">Inicio</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/courses">Cursos</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

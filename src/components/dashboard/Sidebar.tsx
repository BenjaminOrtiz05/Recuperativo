"use client";

import { useState, useEffect } from "react";
import {
  Home,
  GraduationCap,
  Settings,
  X,
  Menu,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import LogoWithTitle from "@/components/LogoWithTitle";

const mainLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/courses", label: "Cursos", icon: GraduationCap },
  { href: "/contact", label: "Contacto", icon: Mail }, // <-- Aquí el link Contacto agregado
];

const bottomLinks = [
  { href: "/settings", label: "Configuración", icon: Settings },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según tamaño ventana
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
        setOpen(true); // En escritorio abierto siempre
      } else {
        setIsDesktop(false);
        setOpen(false); // En móvil cerrado por defecto
      }
    }

    handleResize(); // verificar al montar

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
      {/* Botón hamburguesa visible solo en móvil */}
      {!isDesktop && (
        <button
          aria-label="Abrir menú"
          className="fixed top-4 left-4 z-[9999] p-2 rounded-md bg-background border border-gray-300"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {/* Overlay oscuro en móvil cuando abierto */}
      {!isDesktop && open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9998]"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 border-r bg-background shadow-lg flex flex-col transition-transform duration-300 z-[9999]",
          {
            // En desktop siempre visible y estático (sin translate)
            "translate-x-0": isDesktop || open,
            // En móvil, si no está abierto, se esconde con translateX negativo
            "-translate-x-full": !isDesktop && !open,
          }
        )}
      >
        <div
          className="flex items-center justify-between px-4 py-6 border-b"
          style={{ minHeight: 72, transform: "scale(0.85)", transformOrigin: "center" }}
        >
          <LogoWithTitle />
          {/* Botón cerrar sidebar en móvil */}
          {!isDesktop && (
            <button
              aria-label="Cerrar menú"
              className="p-2 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>

        <nav className="flex-1 flex flex-col gap-3 px-4 mt-10">
          {mainLinks.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  onClick={() => !isDesktop && setOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>

        <nav className="px-4 mb-8 mt-auto">
          {bottomLinks.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  onClick={() => !isDesktop && setOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
}

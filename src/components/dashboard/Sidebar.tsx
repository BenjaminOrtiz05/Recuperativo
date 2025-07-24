"use client";

import {
  Home,
  GraduationCap,
  Settings,
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
];

const bottomLinks = [
  { href: "/settings", label: "Configuración", icon: Settings },
];

export function Sidebar() {
  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "h-screen border-r bg-background transition-all flex flex-col w-64"
        )}
      >
        {/* Contenedor logo con escala para hacerlo más pequeño */}
        <div
          className="flex items-center justify-center px-4 py-6 border-b"
          style={{ minHeight: 72, transform: "scale(0.85)", transformOrigin: "center" }}
        >
          <LogoWithTitle />
        </div>

        {/* Links principales */}
        <nav className="flex-1 flex flex-col gap-3 px-4 mt-10">
          {mainLinks.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link href={href}>
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

        {/* Links inferiores */}
        <nav className="px-4 mb-8 mt-auto">
          {bottomLinks.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link href={href}>
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

// components/layout/Sidebar.tsx

"use client";

import {
  Home,
  GraduationCap,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/courses", label: "Cursos", icon: GraduationCap },
  { href: "/about", label: "Sobre Nosotros", icon: Users },
  { href: "/settings", label: "Configuración", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "h-screen border-r bg-background transition-all",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span
            className={cn(
              "text-xl font-bold text-primary transition-opacity",
              collapsed && "opacity-0"
            )}
          >
            Glowself
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 mt-4 px-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link href={href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    {!collapsed && <span>{label}</span>}
                  </Button>
                </Link>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">
                  <p>{label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
}

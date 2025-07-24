// src/components/dashboard/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Mail, Menu, X } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Inicio", icon: <Home size={20} /> },
  { href: "/courses", label: "Cursos", icon: <BookOpen size={20} /> },
  { href: "/contact", label: "Contacto", icon: <Mail size={20} /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-100 min-h-screen transition-width duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-56"} flex flex-col`}
    >
      {/* Botón para toggle */}
      <div className="flex justify-end p-3 border-b border-gray-300">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expandir menú" : "Colapsar menú"}
          className="text-gray-600 hover:text-gray-900"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col mt-4 gap-2 flex-1">
        {navItems.map(({ href, label, icon }) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className={`justify-start gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 hover:text-gray-900
              ${collapsed ? "justify-center" : "justify-start"}`}
          >
            <Link href={href} className="flex items-center w-full">
              {icon}
              {!collapsed && <span className="ml-2">{label}</span>}
            </Link>
          </Button>
        ))}
      </nav>

      {/* Footer o info opcional */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-300 text-gray-600 text-sm">
          Glowself © {new Date().getFullYear()}
        </div>
      )}
    </aside>
  );
}

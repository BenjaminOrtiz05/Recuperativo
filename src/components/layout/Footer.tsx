// src/components/layout/Footer.tsx
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full bg-muted text-muted-foreground py-4 text-center text-sm"
      )}
    >
      © {new Date().getFullYear()} <span className="font-semibold">Glowself</span> — Todos los derechos reservados
    </footer>
  );
}

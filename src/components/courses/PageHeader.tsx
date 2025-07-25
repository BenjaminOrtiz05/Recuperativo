import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  imageSrc?: string; // opcional, para permitir la imagen decorativa
}

export function PageHeader({
  title,
  subtitle,
  icon,
  className,
  imageSrc = "/courses.png", // default a courses.png
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-border bg-background shadow-sm px-8 py-6 md:py-8 md:px-12",
        className
      )}
    >
      {/* Decoración suave en fondo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-primary rounded-full" />
      </div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Título y subtítulo */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            {icon && <div className="text-primary text-3xl">{icon}</div>}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Imagen decorativa a la derecha */}
        {imageSrc && (
          <div className="hidden md:block shrink-0 pr-4">
            <Image
              src={imageSrc}
              alt="Decorative"
              width={120}
              height={120}
              className="object-contain rounded-md"
            />
          </div>
        )}
      </div>
    </section>
  );
}

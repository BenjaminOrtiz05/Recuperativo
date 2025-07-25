import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  active: boolean;
  imageSrc?: string;
};

function NoImageIcon() {
  return (
    <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="rounded-xl border bg-card shadow-sm p-4 flex flex-col justify-between transition-shadow hover:shadow-md duration-300">
      {/* Imagen o ícono */}
      {course.imageSrc ? (
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
          <Image
            src={course.imageSrc}
            alt={`Imagen del curso ${course.title}`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <NoImageIcon />
      )}

      {/* Título */}
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        {course.title}
      </h3>

      {/* Descripción */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {course.description}
      </p>

      {/* Categoría */}
      <div className="flex justify-center mb-4">
        <Badge>{course.category}</Badge>
      </div>

      {/* Info */}
      <div className="mb-4 space-y-1 text-xs text-muted-foreground">
        <p>Duración: {course.duration}</p>
        <p className={course.active ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
          {course.active ? "Activo" : "Inactivo"}
        </p>
      </div>

      {/* Botón animado */}
      <Link href={`/courses/${course.id}`} passHref>
        <Button
          variant="outline"
          className="w-full transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow hover:border-primary/60"
        >
          Ver más
        </Button>
      </Link>
    </div>
  );
}

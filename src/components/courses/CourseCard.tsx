import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Course = {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  active: boolean;
  imageSrc?: string; // URL de imagen de vista previa opcional
};

// Ícono genérico para cuando no hay imagen
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
    <div className="rounded-xl border bg-card shadow p-4 flex flex-col justify-between">
      {/* Imagen o ícono arriba */}
      {course.imageSrc ? (
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
          <Image
            src={course.imageSrc}
            alt={`Imagen del curso ${course.name}`}
            layout="fill"
            objectFit="cover"
            priority={false}
          />
        </div>
      ) : (
        <NoImageIcon />
      )}

      {/* Título centrado */}
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        {course.name}
      </h3>

      {/* Descripción */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {course.description}
      </p>

      {/* Categoría centrada */}
      <div className="flex justify-center mb-4">
        <Badge>{course.category}</Badge>
      </div>

      {/* Duración y estado alineados a la izquierda */}
      <div className="mb-4 space-y-1">
        <p className="text-xs text-muted-foreground">Duración: {course.duration}</p>
        <p
          className={`text-xs font-medium ${
            course.active ? "text-green-600" : "text-red-500"
          }`}
        >
          {course.active ? "Activo" : "Inactivo"}
        </p>
      </div>

      {/* Botón Ver más que dirige a /courses/[id] */}
      <Link href={`/courses/${course.id}`}>
        <Button variant="outline" className="w-full">
          Ver más
        </Button>
      </Link>
    </div>
  );
}

// src/app/courses/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ✅ ya no usamos mockCourses
// import { mockCourses } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

// ✅ Define un tipo Course aproximado si no tienes uno ya importado
type Course = {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  imageSrc?: string;
  active: boolean;
};

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;

  // ✅ Usamos fetch al endpoint real
  const res = await fetch(`https://web-production-a244.up.railway.app/api/courses/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Curso no encontrado.</p>
      </div>
    );
  }

  const course: Course = await res.json();

  const syllabus = [
    { title: "Introducción", topics: ["Presentación", "Objetivos del curso"] },
    { title: "Fundamentos", topics: ["Conceptos básicos", "Herramientas necesarias"] },
    { title: "Desarrollo", topics: ["Prácticas", "Proyectos guiados"] },
    { title: "Evaluación", topics: ["Exámenes", "Proyecto final"] },
  ];

  function renderDurationTimeline(duration: string) {
    const hours = parseInt(duration.split(" ")[0]);
    const blocks = Math.min(Math.max(hours / 2, 1), 6);

    return (
      <div className="flex items-center space-x-1 mt-2" aria-label="Duración del curso">
        {[...Array(blocks)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-2 rounded bg-primary"
            title={`${2 * (i + 1)} horas`}
          />
        ))}
        <span className="ml-3 text-sm text-muted-foreground">{duration} de duración</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/50">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 px-6 py-12 overflow-y-auto max-w-7xl mx-auto space-y-12">
        <Link href="/courses">
          <Button variant="ghost" className="mb-6">
            ← Volver a cursos
          </Button>
        </Link>

        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
          {course.imageSrc ? (
            <Image
              src={course.imageSrc}
              alt={`Imagen del curso ${course.name}`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center bg-muted h-full w-full rounded-xl">
              <span className="text-muted-foreground">Sin imagen disponible</span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-5xl font-extrabold leading-tight text-foreground">{course.name}</h1>
          <Badge className="text-lg px-4 py-2">{course.category}</Badge>
        </div>

        <p className={`font-semibold text-lg ${course.active ? "text-green-600" : "text-red-600"}`}>
          {course.active ? "Activo" : "Inactivo"}
        </p>

        <section className="prose max-w-none text-lg leading-relaxed text-foreground">
          <h2>Descripción del curso</h2>
          <p>{course.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Duración</h2>
          {renderDurationTimeline(course.duration)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Temario</h2>
          <Accordion type="multiple" className="space-y-3">
            {syllabus.map(({ title, topics }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-300 rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold px-5 py-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    {topics.map((topic, idx) => (
                      <li key={idx} className="text-base leading-relaxed">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Información adicional</h2>
          <ul className="list-disc list-inside space-y-1 text-base text-foreground">
            <li><strong>Nivel:</strong> Intermedio (ejemplo)</li>
            <li><strong>Requisitos:</strong> Conocimientos básicos de programación (ejemplo)</li>
            <li><strong>Beneficios:</strong> Certificado de finalización, acceso a comunidad exclusiva (ejemplo)</li>
            <li><strong>Instructor:</strong> Juan Pérez (ejemplo)</li>
          </ul>
        </section>

        <div className="pt-6">
          <Button
            size="lg"
            className="w-full max-w-xs mx-auto block shadow-lg hover:shadow-xl transition-shadow"
          >
            Inscribirse ahora
          </Button>
        </div>
      </main>
    </div>
  );
}

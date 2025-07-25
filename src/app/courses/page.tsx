"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SearchFilter } from "@/components/courses/SearchFilter";
import { CourseCard } from "@/components/courses/CourseCard";
import { PageHeader } from "@/components/courses/PageHeader";
import { Course } from "@/hooks/useCourses"; // Asegúrate de importar

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  // Puedes definir las categorías manualmente o traerlas desde la API si las soporta
  const categories = ["programación", "marketing", "diseño", "negocios"]; // Ejemplo

  return (
    <div>
      <Sidebar />
      <main className="ml-0 md:ml-64 flex flex-col px-12 py-10 space-y-8 min-h-screen overflow-auto">
        <div className="space-y-2">
          <PageHeader
            title="Cursos disponibles"
            subtitle="Explora nuestra oferta de formación profesional"
            imageSrc="/courses.png"
          />
        </div>

        <SearchFilter
          onResults={setCourses}
          categories={categories}
        />

        <section className="overflow-y-auto h-full pr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-10">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No se encontraron cursos.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SearchFilter } from "@/components/courses/SearchFilter";
import { CourseCard } from "@/components/courses/CourseCard";
import { mockCourses } from "@/lib/data";
import { PageHeader } from "@/components/courses/PageHeader";

export default function CoursesPage() {
  // Estado inicial en "all"
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // Filtra cursos: si category es "all", muestra todo
  const filteredCourses = mockCourses.filter((course) => {
    const matchesQuery = course.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || course.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar con margen derecho adicional */}
      <div className="mr-10">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col px-12 py-10 space-y-8 overflow-hidden">
        {/* Header atractivo */}
        <div className="space-y-2">
          <PageHeader
            title="Cursos disponibles"
            subtitle="Explora nuestra oferta de formación profesional"
            imageSrc="/courses.png"
          />
        </div>

        {/* Filtros controlados */}
        <SearchFilter
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
        />

        {/* Contenedor de cursos */}
        <section className="overflow-y-auto h-full pr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-10">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
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

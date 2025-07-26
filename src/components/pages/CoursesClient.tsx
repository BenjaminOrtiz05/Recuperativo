"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SearchFilter } from "@/components/courses/SearchFilter";
import { CourseCard } from "@/components/courses/CourseCard";
import { PageHeader } from "@/components/courses/PageHeader";
import { Course } from "@/hooks/useCourses";

const API_URL = "https://web-production-a244.up.railway.app/api/courses";

export default function CoursesClient() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get<Course[]>(API_URL);
        setCourses(data);

        const uniqueCategories = Array.from(
          new Set(data.map((course) => course.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error cargando cursos:", error);
        setCourses([]);
        setCategories([]);
      }
    };

    fetchCourses();
  }, []);

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

        <SearchFilter onResults={setCourses} categories={categories} />

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

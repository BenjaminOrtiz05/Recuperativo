// src/app/page.tsx
"use client"
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import CompanyInfo from "@/components/CompanyInfo";
import WeeklyFeaturedCourses from "@/components/dashboard/WeeklyFeaturedCourses";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <CompanyInfo />
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">Cursos Destacados</h2>
          <WeeklyFeaturedCourses />
        </section>
      </main>
    </>
  );
}
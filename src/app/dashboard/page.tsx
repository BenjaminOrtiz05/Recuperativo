// src/app/page.tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";

const cursosDestacados = [
  {
    title: "Curso de Liderazgo",
    description: "Desarrolla habilidades para liderar equipos con éxito.",
    image: "/liderazgo.jpg",
  },
  {
    title: "Comunicación Efectiva",
    description: "Mejora tu comunicación interpersonal y profesional.",
    image: "/comunicacion.jpg",
  },
  {
    title: "Gestión del Tiempo",
    description: "Aprende a administrar tu tiempo y aumenta tu productividad.",
    image: "/tiempo.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cursosDestacados.map((curso) => (
            <CourseCard key={curso.title} {...curso} />
          ))}
        </section>
      </main>
    </>
  );
}

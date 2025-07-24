// src/app/page.tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import CompanyInfo from "@/components/CompanyInfo";

const cursosDestacados = [
  {
    id: "liderazgo",
    title: "Curso de Liderazgo",
    description: "Desarrolla habilidades para liderar equipos con éxito.",
    image: "/liderazgo.jpg",
  },
  {
    id: "comunicacion",
    title: "Comunicación Efectiva",
    description: "Mejora tu comunicación interpersonal y profesional.",
    image: "/comunicacion.jpg",
  },
  {
    id: "tiempo",
    title: "Gestión del Tiempo",
    description: "Aprende a administrar tu tiempo y aumenta tu productividad.",
    image: "/tiempo.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <CompanyInfo />
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">Cursos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cursosDestacados.map((curso) => (
              <CourseCard key={curso.id} {...curso} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

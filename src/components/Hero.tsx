// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center sm:text-left">
        <h2 className="text-4xl font-extrabold mb-4">
          Aprende y crece con Glowself
        </h2>
        <p className="mb-8 max-w-xl mx-auto sm:mx-0">
          Cursos diseñados para potenciar tus habilidades y ayudarte a brillar en tu carrera profesional.
        </p>
        <Button asChild variant="secondary" className="text-blue-700 font-semibold">
          <Link href="/courses">Ver cursos</Link>
        </Button>
      </div>
    </section>
  );
}


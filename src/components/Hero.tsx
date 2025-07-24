"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Fondo partículas tipo polvo animadas */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-20 blur-sm animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center sm:text-left relative z-10">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Aprende y crece con Glowself
        </h2>
        <p className="mb-8 max-w-xl mx-auto sm:mx-0 drop-shadow-md">
          Cursos diseñados para potenciar tus habilidades y ayudarte a brillar en tu carrera profesional.
        </p>
        <Button asChild variant="secondary" className="text-blue-700 font-semibold">
          <Link href="/courses">Ver cursos</Link>
        </Button>
      </div>
    </section>
  );
}

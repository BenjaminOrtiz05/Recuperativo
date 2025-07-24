"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Particle = {
  width: number;
  height: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generar las partículas solo en cliente
    const generatedParticles = Array.from({ length: 15 }).map(() => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-20 blur-sm animate-float"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              top: p.top,
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center sm:text-left relative z-10">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Aprende y crece con Glowself
        </h2>
        <p className="mb-8 max-w-xl mx-auto sm:mx-0 drop-shadow-md">
          Cursos diseñados para potenciar tus habilidades y ayudarte a brillar en tu
          carrera profesional.
        </p>
        <Button asChild variant="secondary" className="text-blue-700 font-semibold">
          <Link href="/courses">Ver cursos</Link>
        </Button>
      </div>
    </section>
  );
}

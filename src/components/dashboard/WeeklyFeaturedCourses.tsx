// src/components/WeeklyFeaturedCourses.tsx
import CourseCard from "@/components/CourseCard";
import { mockCourses } from "@/lib/data";
import { getWeekNumber } from "@/lib/dateUtils";

function shuffleArray<T>(array: T[], seed: number): T[] {
  // Simple shuffle con semilla (Fisher-Yates modificado con seed)
  const result = [...array];
  let currentIndex = result.length, temporaryValue: T, randomIndex: number;
  
  // Función de generación de números pseudoaleatorios con seed (mulberry32)
  function mulberry32(a: number) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
  }
  
  const random = mulberry32(seed);
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;

    temporaryValue = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = temporaryValue;
  }

  return result;
}

export default function WeeklyFeaturedCourses() {
  const activeCourses = mockCourses.filter(c => c.active);
  const week = getWeekNumber(new Date());

  // Mezclar los cursos con seed basado en la semana
  const shuffled = shuffleArray(activeCourses, week);

  // Seleccionar máximo 3
  const cursosDestacados = shuffled.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cursosDestacados.map((curso) => (
        <CourseCard
          key={curso.id}
          id={curso.id}
          title={curso.name}
          description={curso.description}
          image={curso.imageSrc || "/default-image.png"}
        />
      ))}
    </div>
  );
}

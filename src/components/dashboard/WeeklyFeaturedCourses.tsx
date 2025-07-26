// app/components/WeeklyFeaturedCourses.tsx
import CourseCard from "@/components/CourseCard";
import { getWeekNumber } from "@/lib/dateUtils";
import { Course } from "@/hooks/useCourses";

function shuffleArray<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentIndex = result.length, temporaryValue: T, randomIndex: number;

  function mulberry32(a: number) {
    return function () {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
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

export default async function WeeklyFeaturedCourses() {
  const res = await fetch("https://web-production-a244.up.railway.app/api/courses", {
    next: { revalidate: 3600 }, // Cache para 1 hora
  });

  if (!res.ok) {
    throw new Error("No se pudieron cargar los cursos");
  }

  const data: Course[] = await res.json();
  const active = data.filter((c) => c.active);
  const week = getWeekNumber(new Date());
  const featuredCourses = shuffleArray(active, week).slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {featuredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

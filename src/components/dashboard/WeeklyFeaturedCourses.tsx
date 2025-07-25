import CourseCard from "@/components/CourseCard";
import { mockCourses } from "@/lib/data";
import { getWeekNumber } from "@/lib/dateUtils";
import { Course } from "@/hooks/useCourses"; // si quieres tipar

function shuffleArray<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentIndex = result.length, temporaryValue: T, randomIndex: number;

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
  // Para que coincida con el tipo Course, mapea mockCourses
  const activeCourses: Course[] = mockCourses
    .filter(c => c.active)
    .map(c => ({
      id: c.id,
      title: c.name,
      description: c.description,
      category: c.category,
      duration: c.duration,
      image: c.imageSrc ?? "/default-image.png",
      active: c.active,
    }));

  const week = getWeekNumber(new Date());

  const shuffled = shuffleArray(activeCourses, week);

  const cursosDestacados = shuffled.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cursosDestacados.map((curso) => (
        <CourseCard
          key={curso.id}
          course={curso}
        />
      ))}
    </div>
  );
}

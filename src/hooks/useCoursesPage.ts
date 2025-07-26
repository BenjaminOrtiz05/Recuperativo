import { useState, useEffect } from "react";
import axios from "axios";
import { Course } from "@/hooks/useCourses";

const API_URL = "https://web-production-a244.up.railway.app/api/courses";

export function useCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get<Course[]>(API_URL);
        setCourses(data);

        // Extraer categorías únicas
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

  return {
    courses,
    setCourses,
    categories,
  };
}

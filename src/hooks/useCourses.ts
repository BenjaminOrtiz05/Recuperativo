// src/hooks/useCourses.ts

import { useEffect, useState } from "react";
import axios from "axios";

// Define el tipo de un curso
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image?: string;
  active: boolean;
}

// Hook personalizado para obtener cursos
export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses`
        );
        setCourses(response.data);
      } catch (err: unknown) {
  if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? err.message);
    } else if (err instanceof Error) {
        setError(err.message);
    } else {
        setError("Error desconocido");
    }
    } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

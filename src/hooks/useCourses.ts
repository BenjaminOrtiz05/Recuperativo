import { useState, useEffect } from "react";
import axios from "axios";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image?: string;
  active: boolean;
}

const API_URL = "https://web-production-a244.up.railway.app/api/courses";

export const useCoursesCRUD = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<Course[]>(API_URL);
      setCourses(data);
      setError(null);
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

  const createCourse = async (course: Omit<Course, "id">) => {
    setLoading(true);
    try {
      const { data } = await axios.post<Course>(API_URL, course);
      setCourses(prev => [...prev, data]);
      setError(null);
    } catch (err) {
      setError("Error al crear curso");
    } finally {
      setLoading(false);
    }
  };

  const updateCourse = async (id: string, updates: Partial<Course>) => {
    setLoading(true);
    try {
      const { data } = await axios.put<Course>(`${API_URL}/${id}`, updates);
      setCourses(prev => prev.map(c => (c.id === id ? data : c)));
      setError(null);
    } catch (err) {
      setError("Error al actualizar curso");
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCourses(prev => prev.filter(c => c.id !== id));
      setError(null);
    } catch (err) {
      setError("Error al eliminar curso");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};

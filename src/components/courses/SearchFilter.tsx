"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Course } from "@/hooks/useCourses";

interface SearchFilterProps {
  onResults: (courses: Course[]) => void;
  categories: string[];
}

const API_URL = "https://web-production-a244.up.railway.app/api/courses";

export function SearchFilter({ onResults, categories }: SearchFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      setLoading(true);
      try {
        const params: Record<string, string> = {};
        if (query.trim() !== "") params.query = query.trim();
        if (category !== "all") params.category = category;

        const response = await axios.get<Course[]>(API_URL, { params });
        onResults(response.data);
      } catch (error: unknown) {
        console.error("Error al filtrar cursos:", error);
        onResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchFilteredCourses();
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, category, onResults]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        aria-label="Buscar por nombre de curso"
        placeholder="Buscar por nombre de curso..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-1/2"
      />

      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full md:w-1/3" aria-label="Filtrar por categoría">
          <SelectValue placeholder="Filtrar por categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  query: string;
  onQueryChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
}

const categories = ["Desarrollo Web", "Diseño", "Marketing", "Ofimática", "Base de Datos"];

export function SearchFilter({
  query,
  onQueryChange,
  category,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        aria-label="Buscar por nombre de curso"
        placeholder="Buscar por nombre de curso..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full md:w-1/2"
      />

      <Select value={category} onValueChange={onCategoryChange}>
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

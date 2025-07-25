export type CourseType = {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  imageSrc?: string; // opcional si no siempre está
  active: boolean;
};

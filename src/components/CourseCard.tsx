// src/components/CourseCard.tsx
import Image from "next/image";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CourseCard({ title, description, image }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer max-w-sm">
      <Image src={image} alt={title} width={400} height={200} className="object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-4 text-blue-700 font-semibold hover:underline">
          Ver más
        </button>
      </div>
    </div>
  );
}

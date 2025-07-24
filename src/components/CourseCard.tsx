// src/components/CourseCard.tsx
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CourseCard({ title, description, image }: CourseCardProps) {
  return (
    <Card className="max-w-sm cursor-pointer hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-48 rounded-t-md"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <Button variant="link" className="mt-4 p-0 h-auto text-blue-700 hover:underline">
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
}

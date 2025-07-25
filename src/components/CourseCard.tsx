import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Course } from "@/hooks/useCourses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="max-w-sm cursor-pointer hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <Image
          src={course.image ?? "/default-image.png"}
          alt={course.title}
          width={400}
          height={200}
          className="object-cover w-full h-48 rounded-t-md"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
        <p className="text-muted-foreground text-sm">{course.description}</p>
        <Link href={`/courses/${course.id}`}>
          <Button variant="link" className="mt-4 p-0 h-auto text-blue-700 hover:underline">
            Ver más
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

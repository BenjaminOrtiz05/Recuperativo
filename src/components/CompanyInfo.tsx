// src/components/CompanyInfo.tsx

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Lightbulb, Rocket } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section className="max-w-7xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Sobre Glowself</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <Users className="mx-auto mb-4 h-12 w-12 text-blue-600" />
            <CardTitle>Comunidad</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Formamos una comunidad activa que aprende y crece junto a ti.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Lightbulb className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
            <CardTitle>Innovación</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cursos diseñados con metodologías modernas y prácticas innovadoras.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Rocket className="mx-auto mb-4 h-12 w-12 text-red-500" />
            <CardTitle>Crecimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Impulsamos tu carrera para que alcances nuevas metas.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

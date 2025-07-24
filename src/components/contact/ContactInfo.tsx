import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Phone className="w-6 h-6 text-emerald-500" />
          <CardTitle className="text-base">Teléfono</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground pl-[2.5rem]">
          +58 412-1234567
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Mail className="w-6 h-6 text-sky-500" />
          <CardTitle className="text-base">Correo</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground pl-[2.5rem]">
          contacto@empresa.com
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <MapPin className="w-6 h-6 text-rose-500" />
          <CardTitle className="text-base">Dirección</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground pl-[2.5rem]">
          Av. Principal, Edificio Glowself, Caracas
        </CardContent>
      </Card>
    </div>
  );
}

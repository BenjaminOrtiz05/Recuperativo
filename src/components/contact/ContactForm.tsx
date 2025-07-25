"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { User, Mail, CheckCircle, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { useContact } from "@/hooks/useContact";

const schema = z.object({
  name: z.string().min(2, "Debe tener al menos 2 caracteres"),
  email: z.string().email("Correo inválido"),
  message: z.string().min(10, "El mensaje debe ser más largo"),
});

type ContactData = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<ContactData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { sendContactMessage } = useContact();
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: ContactData) => {
    setStatus(null);
    const result = await sendContactMessage(data);

    if (!result?.success) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  };

  return (
    <Card className="shadow-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold text-foreground">
          Contáctanos
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          ¿Tienes alguna duda? Envíanos un mensaje y te responderemos pronto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-6"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nombre completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: Ana Torres"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Correo electrónico
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe tu mensaje..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {status === "success" && (
              <Alert variant="default" className="bg-green-50 border-green-200 text-green-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle>Mensaje enviado</AlertTitle>
                <AlertDescription>
                  Gracias por contactarnos. Te responderemos pronto.
                </AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert variant="destructive">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Ocurrió un problema al enviar el mensaje. Intenta nuevamente.
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

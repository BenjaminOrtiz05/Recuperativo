// hooks/useContact.ts

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

type SendContactResult =
  | { success: true }
  | { success: false; error: unknown };

export function useContact() {
  const sendContactMessage = async (data: ContactData): Promise<SendContactResult> => {
    try {
      const response = await fetch(`https://web-production-a244.up.railway.app/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        if (contentType?.includes("application/json")) {
          const errorData = await response.json();
          console.error("Errores de validación:", errorData.errors);
        } else {
          const text = await response.text();
          console.error("Error inesperado, respuesta:", text);
        }
        return { success: false, error: "Error en la respuesta del servidor" };
      }

      const resData = await response.json();
      console.log("Mensaje enviado correctamente:", resData);
      return { success: true };

    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      return { success: false, error };
    }
  };

  return { sendContactMessage };
}

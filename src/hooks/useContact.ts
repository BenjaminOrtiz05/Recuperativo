// hooks/useContact.ts

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export function useContact() {
  const sendContactMessage = async (data: ContactData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        const contentType = response.headers.get("content-type");
        
if (!response.ok) {
  // Podría venir un JSON con errores o un HTML de error
  if (contentType && contentType.includes("application/json")) {
    const errorData = await response.json();
    console.error("Errores de validación:", errorData.errors);
  } else {
    const text = await response.text();
    console.error("Error inesperado, respuesta:", text);
  }
  return;
}

// Si todo bien parsea JSON
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

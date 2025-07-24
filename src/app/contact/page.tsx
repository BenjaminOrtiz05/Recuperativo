// src/app/contact/page.tsx

import { Sidebar } from "@/components/dashboard/Sidebar";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-muted/50">
      <Sidebar />
      <main className="flex-1 px-6 py-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-primary">Contáctanos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
}

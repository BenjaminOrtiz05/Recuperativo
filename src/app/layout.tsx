import './globals.css';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// IMPORTANTE: asegurate de tener un ícono en public (por ejemplo: /favicon.ico, o /logo.png)
export const metadata: Metadata = {
  title: {
    default: 'Glowself',
    template: 'Glowself | %s',
  },
  description: 'Glowself: plataforma de gestión moderna y flexible.',
  icons: {
    icon: '/favicon.svg', // usa tu ícono aquí, por ejemplo: '/logo-glowself.ico' o '/logo.png'
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

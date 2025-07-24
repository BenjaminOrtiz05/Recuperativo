// src/app/layout.tsx
import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Glowself Dashboard',
  description: 'Dashboard de la empresa Glowself',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

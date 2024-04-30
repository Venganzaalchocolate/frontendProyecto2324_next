import { Inter } from "next/font/google";
import "@/ui/globals.css";
import { open_sans } from "@/ui/fonts";
import Header from  '@/ui/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mesa Mágica",
  description: "Tienda online de venta de juegos de mesa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${open_sans.className}`}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BootstrapClient from "../components/BootstrapClient";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Delicias del Gueyo",
  description: "Pan y pizzas artesanales, hechas con cariño",
};

export default function RootLayout({ children }) {
  const whatsappNumber = "56932640469";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20hacer%20un%20pedido.`;

  return (
    <html lang="es">
      <body className={`${poppins.className} d-flex flex-column min-vh-100`}>
        <BootstrapClient />
        <Navbar />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />

        <a
          href={whatsappLink}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.601 2.326A7.928 7.928 0 0 0 8.012.001C4.199.001 1.03 3.17 1.03 6.983c0 1.232.323 2.437.938 3.505L.027 15.999l5.66-1.467a7.95 7.95 0 0 0 3.325.757h.003c3.813 0 6.982-3.169 6.982-6.982a6.93 6.93 0 0 0-2.396-5.981zM8.012 14.5a6.49 6.49 0 0 1-3.305-.907l-.237-.141-3.356.87.897-3.27-.155-.252A6.487 6.487 0 0 1 1.47 6.983c0-3.607 2.935-6.542 6.542-6.542a6.51 6.51 0 0 1 4.642 1.93 6.49 6.49 0 0 1 1.93 4.612c0 3.607-2.935 6.542-6.542 6.542zm3.688-4.957c-.2-.1-1.184-.584-1.368-.651-.184-.068-.318-.1-.451.1-.134.2-.517.651-.634.785-.117.134-.234.15-.434.05-.2-.1-.851-.314-1.622-1-.6-.534-1.005-1.194-1.122-1.394-.117-.2-.012-.308.088-.408.09-.089.2-.234.3-.351.1-.117.134-.2.2-.334.067-.134.034-.25-.017-.351-.05-.1-.451-1.087-.618-1.488-.163-.392-.33-.338-.451-.344l-.384-.007a.742.742 0 0 0-.534.25c-.184.2-.7.684-.7 1.668s.717 1.936.817 2.07c.1.134 1.41 2.153 3.413 3.018.478.206.85.329 1.14.421.478.152.914.131 1.258.08.383-.057 1.184-.484 1.35-.952.167-.468.167-.868.117-.952-.05-.084-.184-.134-.384-.234z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}

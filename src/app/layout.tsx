import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import CartSidebar from "@/components/organisms/CartSidebar";
import { CartSidebarProvider } from "@/context/cartSidebar";
import { CartProvider } from "@/context/cart";
import styles from './page.module.scss'
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tangent Shop",
  description: "Tangent Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartSidebarProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
            <header className={styles.header}>
              <Navbar />
              <CartSidebar />
            </header>

            <main className="container">
              {children}
            </main>
          </body>
        </html>
      </CartProvider>
    </CartSidebarProvider>
  );
}

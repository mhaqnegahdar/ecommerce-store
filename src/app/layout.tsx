import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });

// Components
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

// Types
import { ContainerProps } from "@/types/props";

export const metadata: Metadata = {
  title: "Store",
  description: "Ecommerce Store",
};

export default function RootLayout({ children }: ContainerProps) {
  return (
    <html lang="en">
      <body className={urbanist.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}

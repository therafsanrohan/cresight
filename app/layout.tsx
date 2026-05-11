import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CRESIGHT",
    default: "CRESIGHT | Premium Creative Agency",
  },
  description: "A world-class premium creative agency. Minimal. Sophisticated. Confident. Creative. Strategic. Expensive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-cresight-black text-cresight-white font-sans">
        <CustomCursor />
        <div className="bg-noise" />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

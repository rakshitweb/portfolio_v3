import type { Metadata } from "next";
import "./globals.css";
import { Navbar, RandomBackground } from "@/components";

export const metadata: Metadata = {
  title: "Rakshit Agrawal | Full Stack Developer",
  description: "This is my V3 portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-background">
        <RandomBackground />
        <main className="relative h-[100vh] w-full z-0">
          {/* <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
  );
}

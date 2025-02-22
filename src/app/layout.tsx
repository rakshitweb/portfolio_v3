import type { Metadata } from "next";
import "./globals.css";
import { MousePointer, Navbar, RandomBackground, Wrapper } from "@/components";

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
        <MousePointer />
        {/* <Navbar /> */}
        <Wrapper className="relative px-4 sm:px-8 md:px-[10rem] h-[100vh] overflow-auto z-content">
          {children}
        </Wrapper>
      </body>
    </html>
  );
}

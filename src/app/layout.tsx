import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

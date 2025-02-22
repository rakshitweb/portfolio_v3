import { ReactNode } from "react";

export function Wrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto w-full sm:w-sm md:w-md lg:w-lg xl:w-xl ${className}`}
    >
      {children}
    </main>
  );
}

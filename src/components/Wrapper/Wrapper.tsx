import { ReactNode } from "react";

export function Wrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto px-4 md:px-4 w-full sm:w-sm md:w-md lg:w-lg xl:w-xl ${className}`}
    >
      {children}
    </div>
  );
}

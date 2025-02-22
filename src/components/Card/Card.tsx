import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 lg:p-10 bg-card bg-opacity-10 border-2 rounded-xl w-max text-text shadow-frost shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

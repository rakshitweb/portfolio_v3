import { ReactNode } from "react";

export function SideElement({
  children,
  orientation,
}: {
  children: ReactNode;
  orientation: "left" | "right";
}) {
  return (
    <div
      className={`fixed bottom-0 px-20 flex flex-col gap-6 items-center ${
        orientation === "left" ? "left-0" : "right-0"
      }`}
    >
      {children}
      <span className="inline-block h-[12rem] w-[2px] bg-text" />
    </div>
  );
}

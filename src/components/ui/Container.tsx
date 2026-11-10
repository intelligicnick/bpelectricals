import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${
        wide ? "max-w-[1440px]" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "lg" | "xl" | "2xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}
export function Heading({
  size = "lg",
  className,
  children,
  asChild,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

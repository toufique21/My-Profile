import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";

export function ActionLink({
  variant = "default",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        buttonVariants({ variant }),
        "h-11 gap-2 rounded-full px-6 text-sm font-medium",
        variant === "default" &&
          "shadow-[0_14px_36px_-16px_var(--primary)] hover:bg-primary/90",
        variant === "outline" &&
          "border-white/15 bg-white/[0.03] text-foreground hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    />
  );
}

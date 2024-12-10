import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const containerSizes = {
  base: "max-w-[1280px]",
};

const Container = forwardRef<
  HTMLDivElement,
  {
    size?: keyof typeof containerSizes;
    className?: string;
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
>(({ size = "base", children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full px-15", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;

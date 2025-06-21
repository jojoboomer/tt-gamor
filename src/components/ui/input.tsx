import { cn } from "@/lib/utils";
import type React from "react";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  className?: string;
  error?: boolean;
}

function Input({
  label,
  className,
  leftChildren,
  rightChildren,
  error,
  ...props
}: Props) {
  return (
    <div className="relative flex w-full items-center">
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center ">
        {leftChildren}
      </div>
      <input
        className={cn(
          `placeholder:text-text-secondary flex h-9 w-full min-w-0 rounded-xl
         border bg-transparent px-2 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none 
         disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
        focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[1px]`,
          error
            ? "border-warning focus:ring-warning/70"
            : "border-text-secondary hover:border-text-secondary/70",
          leftChildren && "pl-8",
          rightChildren && "pr-8",
          className
        )}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center ">
        {rightChildren}
      </div>
    </div>
  );
}

export default Input;

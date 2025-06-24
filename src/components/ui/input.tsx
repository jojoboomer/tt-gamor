import { cn } from "@/lib/utils";
import type React from "react";

interface Props extends React.ComponentProps<"input"> {
  label?: string; // Optional label for the input field. (Note: currently not rendered in the JSX).
  leftChildren?: React.ReactNode; // Optional content to be rendered on the left side of the input field (e.g., an icon).
  rightChildren?: React.ReactNode; // Optional content to be rendered on the right side of the input field (e.g., an icon, a button).
  className?: string; // Optional custom CSS classes to be applied to the input element itself.
  error?: boolean; // Boolean flag to indicate an error state, triggering specific error styles.
}

function Input({
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
          `placeholder:text-text-secondary flex h-9 w-full min-w-0 rounded-lg
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

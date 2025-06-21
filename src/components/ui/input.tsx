import { cn } from "@/lib/utils";
import type React from "react";

interface Props extends React.ComponentProps<"input"> {
  id: string;
  label?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  className?: string;
  error?: boolean;
}

const Input = ({
  id,
  label,
  leftChildren,
  rightChildren,
  className,
  error,
  ...props
}: Props) => {
  const baseClasses = `relative group flex gap-2 items-center w-full border py-2 bg-background text-text rounded-xl
  
  ${
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-slate-600 hover:border-slate-500"
  }`;

  return (
    <label htmlFor={id}>
      {label && (
        <span className="text-sm font-medium text-text-secondary">
          {label}
        </span>
      )}

      <div className={cn(baseClasses, className)}>
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center ">
          {leftChildren}
        </div>
        <input
          id={id}
          className={cn(
            'flex-1 !bg-transparent ', 
            `${leftChildren ? "pl-10" : ""} ${rightChildren ? "pr-10" : ""}`
          )}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 pr-2 flex items-center ">
          {rightChildren}
        </div>
      </div>
    </label>
  );
};

export default Input;

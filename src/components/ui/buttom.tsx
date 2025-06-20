import { cn } from "@/lib/utils";

type Variants = "primary" | "secondary" | "ghost" | "link" | "icon";

type Sizes = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: Variants;
  size?: Sizes;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) => {
  const baseClasses = `inline-flex items-center justify-center hover:cursor-pointer`;

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/80 shadow-lg rounded-4xl",
    secondary: "bg-accent text-black hover:bg-accent/10 shadow-lg rounded-4xl",
    ghost: "bg-transparent text-black hover:bg-black/10 rounded-4xl",
    link: "bg-transparent",
    icon: "bg-primary text-white rounded-full aspect-square",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "size-10 text-base",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        variant == "icon" ? sizeClasses['icon'] : sizeClasses[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

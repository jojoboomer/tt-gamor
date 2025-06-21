import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent border",
        ghost: "hover:bg-black/10 dark:hover:bg-white/10",
        link: "underline-offset-4 hover:underline",
        icon: "rounded-full",
      },
      color: {
        default: "text-black dark:text-white",
        primary: "text-primary",
        accent: "text-accent",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        icon: "size-9",
      },
    },
    compoundVariants: [
      // Default
      {
        variant: "default",
        color: "default",
        class: "hover:bg-black/80 bg-black text-white dark:hover:bg-white/80 dark:bg-white dark:text-black shadow ",
      },
      {
        variant: "default",
        color: "primary",
        class: "hover:bg-primary/80 bg-primary text-white shadow ",
      },
      {
        variant: "default",
        color: "accent",
        class: "hover:bg-accent/80 bg-accent text-black shadow ",
      },
      // Outline
      {
        variant: "outline",
        color: "default",
        class: "hover:text-black/80 text-black dark:hover:text-white/80 dark:text-white",
      },
      {
        variant: "outline",
        color: "primary",
        class: "hover:text-primary/80 text-primary",
      },
      {
        variant: "outline",
        color: "accent",
        class: "hover:opacity-80 text-accent",
      },
      // Ghost
      {
        variant: "ghost",
        color: "default",
        class: "",
      },
      {
        variant: "ghost",
        color: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "accent",
        class: "text-accent hover:bg-accent/10",
      },
      // Links
      {
        variant: "link",
        color: "default",
        class: "text-black dark:text-white",
      },
      {
        variant: "link",
        color: "primary",
        class: "text-blue-600",
      },
      {
        variant: "link",
        color: "accent",
        class: "text-green-600",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "md",
    },
  },
)

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: buttonVariants;
  color?: colorVariants;
  size?: sizeVariants;
}

const Button = ({
  children,
  variant = "default",
  color = "default",
  size = "md",
  className,
  ...props
}: Props) => {
 
  return (
    <button
      className={cn(
        buttonVariants({ variant, color, size, className }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

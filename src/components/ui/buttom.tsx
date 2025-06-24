import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Defines the base and variant styles for the button component using cva.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "hover:bg-black/80 bg-black text-white dark:hover:bg-white/80 dark:bg-white dark:text-black shadow-md",
        outline: "border bg-transparent shadow-md",
        primary: "bg-primary text-white hover:bg-primary/70 shadow-md ",
        text: "hover:text-text/70 text-text !px-1",
        link: "text-white dark:text-black underline-offset-4 hover:underline !px-1",
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3",
        md: "h-9 px-4 py-2 ",
        lg: "h-10 rounded-md px-6 ",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({
  children,
  variant = "default", // Destructures 'variant' prop with a default value.
  size = "md", // Destructures 'size' prop with a default value.
  className, // Destructures 'className' prop for custom styles.
  ...props // Gathers all other standard HTML button props.
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children} {/* Renders the content passed into the button. */}
    </button>
  );
};

export default Button;

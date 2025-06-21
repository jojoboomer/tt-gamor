import { cn } from "@/lib/utils";

type AlignVariant = "left" | "center" | "right";

interface Props {
    className?: string;
    label?: string;
    align?: AlignVariant;
} 

const Divider = ({ className, label, align = "center" }: Props) => {
    const alignmentClasses = {
        left: "left-1/2 top-1/2 -translate-1/2 ",
        center: "left-1/2 top-1/2 -translate-1/2 ",
        right: "left-1/2 top-1/2 -translate-1/2 ",
    };
  return (
    <div className={cn("relative w-full h-px bg-text-secondary", className)}>
          {label && <span className={cn("absolute bg-background px-2 text-text-secondary",alignmentClasses[align])}>{label}</span>}
      </div>
  );
};

export default Divider
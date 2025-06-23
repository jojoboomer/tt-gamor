import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Divider = ({ children, className }: Props) => {

  return (
    <div className={cn("flex items-center", className)}>
      <div className="h-px flex-1 bg-border"></div>
      {children && <div className="px-2">{children}</div>}
      <div className="h-px flex-1 bg-border"></div>
    </div>
  );
};

export default Divider;

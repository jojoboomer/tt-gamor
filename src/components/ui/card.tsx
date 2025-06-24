import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={cn("bg-card shadow-md rounded-2xl p-4 flex flex-col gap-4", className)}>
      {children}
    </div>
  );
};

export default Card;
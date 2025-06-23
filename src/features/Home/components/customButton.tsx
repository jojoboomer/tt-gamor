import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"button"> {
  className?: string;
  error?: boolean;
}

const CustomAccountButton = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn("text-sm px-8 py-4 rounded-4xl shadow-lg", className)}
    >
      Create account
    </button>
  );
};

export default CustomAccountButton
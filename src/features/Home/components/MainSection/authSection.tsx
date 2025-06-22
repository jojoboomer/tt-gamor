import { cn } from "@/lib/utils";
import Button from "@components/ui/buttom";

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

const AuthSection = () => {
  return (
    <div className="flex-1 p-10 flex flex-col gap-10 h-full justify-center">
      <div className="w-full flex items-center">
        <h1 className="w-min font-semibold">
          start <span className="text-accent dark:text-primary">streaming</span>{" "}
          games differently
        </h1>
      </div>
      <p>
        gamor now has{" "}
        <span className="relative font-bold ">
          stream party{" "}
          <svg className="absolute left-0 w-full -bottom-6 h-8 dark:stroke-accent stroke-primary">
            <path d="M5 20 Q60 5 90 20" fill="transparent" strokeWidth="2" />
          </svg>
        </span>
        platform
      </p>
      <div className="flex gap-6 items-center">
        <CustomAccountButton className="dark:bg-white/10 dark:hover:bg-white/20 bg-white hover:bg-black/5" />
        <Button size="md" variant="text">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default AuthSection;

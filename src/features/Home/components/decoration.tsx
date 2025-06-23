import { cn } from "@/lib/utils";

const Decoration = ({className} : {className?: string}) => {
  return (
    <svg
      height="150"
      width="300"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        stroke="inherit"
        d="M41 57c-64 35-57 104 56 80 47-11 83-26 116-51 71-59-1-96-68-71"
        fill="transparent"
      />
    </svg>
  );
};

export default Decoration;

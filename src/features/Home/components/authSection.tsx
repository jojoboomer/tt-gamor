import Button from "@components/ui/buttom";

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
          <svg className="absolute left-0 w-full -bottom-6 h-8 stroke-accent dark:stroke-primary"  >
            <path
              d="M5 20 Q60 5 90 20"
              fill="transparent"
              stroke-width="2"
            />
          </svg>
        </span>
        platform
      </p>
      <div className="flex gap-4">
        <Button size="lg" variant="default">
          Create account
        </Button>
        <Button size="md" variant="ghost">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default AuthSection;

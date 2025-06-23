import { cn, createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import Button from "@components/ui/buttom";
import CustomAccountButton from "../customButton";
import Decoration from "../decoration";

const AuthSection = ({ className }: { className?: string }) => {
  const { session } = useAuthenticationStore();
  return (
    <div className={cn(className)}>
      <div className="relative ">
        <h1 className="w-min font-semibold relative z-10">
          start <span className="text-accent dark:text-primary">streaming</span>{" "}
          games differently
        </h1>
        <Decoration className="stroke-accent dark:stroke-primary absolute left-0 bottom-12 opacity-50 " />
        <Decoration className="stroke-accent dark:stroke-primary absolute left-0 bottom-4 opacity-50 " />
        <Decoration className="stroke-accent dark:stroke-primary absolute left-0 -bottom-4 opacity-50 " />
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
      <div className="flex gap-6 items-center justify-start w-full">
        {session ? (
          <p className="inline-flex items-center">
            👌Welcome back {" "}
            <img
              src={
                session.user.avatar ||
                createInitialsAvatar(session.user.fullName)
              }
              alt={session.user.fullName}
              className="mx-2 rounded-full size-6"
            />
            <span className="text-accent dark:text-primary font-semibold">{`${session.user.username}`}</span>
          </p>
        ) : (
          <>
            <CustomAccountButton className="dark:bg-white/10 dark:hover:bg-white/20 bg-white hover:bg-black/5" />
            <Button size="md" variant="text">
              Sign in
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthSection;

import { createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";

const Avatar = () => {
  const { session  } = useAuthenticationStore();

  return (
    <div className="relative flex size-8 shrink-0 overflow-hidden rounded-full bg-accent items-center justify-center text-2xl">
      <img src={session?.user? createInitialsAvatar(session.user.fullName) :''} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
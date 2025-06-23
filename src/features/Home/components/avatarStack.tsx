import { cn, createInitialsAvatar } from "@/lib/utils";

interface Props {
  list: any[];
  className?: string;
  size?: string;
}

const AvatarStack = ({ list, className, size = "size-6" }: Props) => {
  return (
    <div className={cn("flex items-center -space-x-2 flex-1", className)}>
      {list.map((item, index) => (
        <img
          key={index }
          src={item.avatar || createInitialsAvatar(item.username)}
          alt={item.username}
          className={cn("rounded-full border border-border", size)}
        ></img>
      ))}
    </div>
  );
};

export default AvatarStack;

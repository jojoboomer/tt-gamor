import {
  Dropdown,
  DropdownMenu,
  DropdownOption,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/ui.store";
import { LogOut, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";

const Avatar = () => {
  const { user } = useAuthenticationStore();
  console.log(user);
  return (
    <div className="relative flex size-8 shrink-0 overflow-hidden rounded-full bg-accent items-center justify-center text-2xl">
      <img src={user? createInitialsAvatar(user.fullName) :''} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};

function AvatarButton() {
  const { logout } = useAuthenticationStore();
  const { toggleTheme, theme } = useGamorStore();
  const navigate = useNavigate();

   const handleChangeTheme = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <Dropdown>
      <DropdownTrigger showChevron={false} className="w-full" asChild>
        <Avatar />
      </DropdownTrigger>
      <DropdownMenu direction="right">
        <DropdownOption
          onClick={handleChangeTheme}
          className="flex items-center min-w-40 justify-between"
        >
          <span>Change to </span>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </DropdownOption>
        <DropdownOption
          onClick={handleLogout}
          className="flex items-center min-w-40 justify-between"
        >
          <span>Log out</span>
          <LogOut size={20} />
        </DropdownOption>
      </DropdownMenu>
    </Dropdown>
  );
}

export default AvatarButton;

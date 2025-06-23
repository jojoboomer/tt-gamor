import {
  Dropdown,
  DropdownMenu,
  DropdownOption,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/main.store";
import { LogOut, Moon, Sun } from "lucide-react";
import Avatar from "./avatar";

function AvatarButton() {
  const { logout } = useAuthenticationStore();
  const { toggleTheme, theme, setCurrentEvent } = useGamorStore();

   const handleChangeTheme = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    logout();
    setCurrentEvent(null)
    // navigate("/login");
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

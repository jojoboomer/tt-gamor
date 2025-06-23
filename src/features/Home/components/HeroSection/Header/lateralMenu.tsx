import Divider from "@/components/ui/divider";
import { cn } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/main.store";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Avatar from "./avatar";

interface SideMenuProps {
  navItems: { name: string; href: string }[];
  closeSidebar: () => void;
}

const LateralMenu: React.FC<SideMenuProps> = ({ navItems, closeSidebar }) => {
  const { session, logout } = useAuthenticationStore();
  const { toggleTheme } = useGamorStore();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname; // This is important for active link styling in sidebar

  const handleLogin = () => {
    navigate("/login");
    closeSidebar();
  };
  const handleCreateAccount = () => {
    navigate("/register");
    closeSidebar();
  };
  const handleChangeTheme = () => {
    toggleTheme();
    closeSidebar();
  };
  const handleLogout = () => {
    logout();
    closeSidebar();
  };

  return (
    <ul className="space-y-4 font-medium text-lg">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            onClick={closeSidebar}
            className={cn(
              item.href === currentPage && "text-primary dark:text-accent "
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
      <Divider />
      <div className="space-y-4 text-text ">
        <li onClick={handleChangeTheme}>Change theme</li>
        {session ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <>
            <li onClick={handleLogin}>Login</li>
            <li onClick={handleCreateAccount}>Create account</li>
          </>
        )}
      </div>
      {session && (
        <div className="mt-12 flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Avatar />
          <span className="text-gray-800 dark:text-gray-200 font-semibold">
            Hello {session.user?.username || session.user?.email}
          </span>
        </div>
      )}
    </ul>
  );
};

export default LateralMenu;

import useAuthenticationStore from "@/store/auth.store";
import Button from "@components/ui/buttom";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Decoration from "../decoration";
import AvatarButton from "./avatarButton";

const Header = () => {
  const { session, user, logout } = useAuthenticationStore();
  const [currentPage, setCurrentPage] = useState("/");
  const navigate = useNavigate();
  console.log(user);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Streams", href: "/streams" },
    { name: "Party", href: "/party" },
    { name: "Premium", href: "/premium" },
  ];

  return (
    <header className="flex items-center justify-between w-full h-20 md:h-28 md:px-0 px-8">
      <nav className="flex-1 items-center gap-6 hidden md:flex ">
        {navItems.map((item) => (
          <Link to={item.href} key={item.name}>
            <Button
              variant="text"
              size="md"
              className={`font-medium ${
                currentPage === item.href
                  ? "text-primary dark:text-accent"
                  : "hover:text-primary dark:hover:text-accent"
              }`}
            >
              <span className="relative">
                {currentPage === item.href && (
                  <Decoration className="absolute stroke-accent dark:stroke-primary scale-100 left-0 top-0" />
                )}
                {item.name}
              </span>
            </Button>
          </Link>
        ))}
      </nav>
      <div className="relative text-xl font-extrabold flex items-center">
        <div className="absolute -left-4 size-6 blur-[2px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.3)]  rounded-full"></div>
        <span>Gamor</span>
      </div>
      <div className="flex-1 items-center gap-8 justify-end  hidden md:flex">
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <AvatarButton />
            </>
          ) : (
            <>
              <Button onClick={handleLogin}>Sign in</Button>
              <Button onClick={handleCreateAccount}>Create account</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

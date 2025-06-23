import useAuthenticationStore from "@/store/auth.store";
import Button from "@components/ui/buttom";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CustomAccountButton from "../../customButton";
import Decoration from "../../decoration";
import AvatarButton from "./avatarButton";

const Header = () => {
  const { session } = useAuthenticationStore();
  const [currentPage, setCurrentPage] = useState("/");
  const navigate = useNavigate();

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
          //TODO
          <Link to={item.href} key={item.name}>
            <Button
              variant="text"
              size="md"
              className={`font-medium ${
                currentPage === item.href
                  ? "text-primary dark:text-accent hover:text-inherit "
                  : "hover:text-primary dark:hover:text-accent"
              }`}
            >
              <div className="relative">
                {item.name}
                <Decoration className=" stroke-accent dark:stroke-primary scale-10 inset-0 stroke-3 " />
              </div>
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
              <Button variant="text" onClick={handleLogin}>
                Sign in
              </Button>
              <CustomAccountButton
                className="bg-gray-950 border border-border/80 px-6 py-3 text-text hover:bg-gray-800"
                onClick={handleCreateAccount}
              >
                Create account
              </CustomAccountButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

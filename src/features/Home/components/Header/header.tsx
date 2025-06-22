import useAuthenticationStore from "@/store/auth.store";
import Button from "@components/ui/buttom";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import AvatarButton from "./avatarButton";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Selecciona una opción");
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
    <header className="flex items-center justify-between w-full h-28 ">
      <nav className="flex-1 flex items-center gap-6">
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
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="relative text-xl font-extrabold flex items-center">
        <div className="absolute -left-4 size-6 blur-[2px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.3)]  rounded-full"></div>
        <span>Gamor</span>
      </div>
      <div className="flex-1 flex items-center gap-8 justify-end">
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

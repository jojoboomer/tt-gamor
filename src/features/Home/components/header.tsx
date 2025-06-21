import Button from "@components/ui/buttom";
import { useState } from "react";
import { Link } from "react-router";
import ThemeMenu from "./themeMenu";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("/");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Streams", href: "/streams" },
    { name: "Party", href: "/party" },
    { name: "Premium", href: "/premium" },
  ];

  return (
    <header className="flex items-center justify-between w-full h-28 ">
      <nav className="flex-1 flex items-center gap-2">
        {navItems.map((item) => (
          <Link to={item.href} key={item.name}>
            <Button
              color="default"
              variant="link"
              size="md"
              className={`font-medium ${
                currentPage === item.href ? "text-primary dark:text-accent" : "hover:text-primary dark:hover:text-accent"
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
        <Button>Sign in</Button>
        <Button>Create account</Button>
        <ThemeMenu />
      </div>
    </header>
  );
};

export default Header;

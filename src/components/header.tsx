import { useState } from "react";
import ThemeToggle from "./themeToggle";
import Button from "./ui/buttom";

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
      <nav className="flex-1 flex items-center gap-8">
        {navItems.map((item) => (
          <Button
            variant="link"
            key={item.name}
            className={`font-medium transition-colors ${
              currentPage === item.href ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => setCurrentPage(item.href)}
          >
            {item.name}
          </Button>
        ))}
      </nav>
      <div className="relative text-xl font-extrabold flex items-center">
        <div className="absolute -left-4 size-6 blur-[2px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.3)]  rounded-full"></div>
        <span>Gamor</span>
      </div>
      <div className="flex-1 flex items-center gap-8 justify-end">
        <Button>Sign in</Button>
        <Button>Create account</Button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

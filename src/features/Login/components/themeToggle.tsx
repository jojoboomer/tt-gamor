import Button from "@/components/ui/buttom";
import useGamorStore from "@store/ui.store";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { toggleTheme } = useGamorStore();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Button variant="icon" size="icon" onClick={handleToggleTheme}>
      <div className="relative w-6 h-6">
        <Sun
          className="absolute inset-0 w-6 h-6 transition-all duration-300 
          dark:opacity-0 dark:rotate-90 dark:scale-0 opacity-100 rotate-0 scale-100"
        />
        <Moon className="absolute inset-0 w-6 h-6 transition-all duration-300 dark:opacity-100 dark:rotate-0 dark:scale-100 opacity-0 -rotate-90 scale-0" />
      </div>
    </Button>
  );
};

export default ThemeToggle;

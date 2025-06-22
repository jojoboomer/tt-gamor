import Button from "@/components/ui/buttom";
import { cn } from "@/lib/utils";
import useGamorStore from "@/store/main.store";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useGamorStore();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Button variant="default" size="icon" onClick={handleToggleTheme}>
      <Sun
        className={cn(
          theme === "dark" ? "hidden" : "block",
          "transition-all duration-300 dark:opacity-0 dark:rotate-90 dark:scale-0 opacity-100 rotate-0 scale-100"
        )}
      />
      <Moon
        className={cn(
          theme === "light" ? "hidden" : "block",
          "transition-all duration-300 dark:opacity-100 dark:rotate-0 dark:scale-100 opacity-0 -rotate-90 scale-0"
        )}
      />
    </Button>
  );
};

export default ThemeToggle;

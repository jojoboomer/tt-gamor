import GameModal from "@/features/Home/components/gameModal";
import { ModalProvider } from "@/store/modal.context";
import useGamorStore from "@store/ui.store";
import { useEffect } from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  const { theme } = useGamorStore();

  useEffect(() => {
    let applied = theme;
    if (theme === "system") {
      applied = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList.toggle("dark", applied === "dark");
  }, [theme]);

  return (
    <ModalProvider>
      <main className="relative bg-background text-text min-h-screen w-full">
        <Outlet />
      </main>
      <GameModal />
    </ModalProvider>
  );
};

export default RootLayout;

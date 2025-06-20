import useGamorStore from "@/store/store";
import { useEffect } from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  const { theme } = useGamorStore();

   useEffect(() => {
    let applied = theme;
    if (theme === 'system') {
      applied = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    document.documentElement.classList.toggle('dark', applied === 'dark');
  }, [theme]);

  return (
    <main className="relative bg-background text-text min-h-screen w-full">
      <Outlet />
    </main>
  );
};

export default RootLayout;

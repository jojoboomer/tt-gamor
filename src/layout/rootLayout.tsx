import useAuthenticationStore from "@/features/Login/store/auth.store";
import useGamorStore from "@store/ui.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const RootLayout = () => {
  const { theme } = useGamorStore();
  const { session } = useAuthenticationStore();
  const navigation = useNavigate()

  useEffect(() => {
    console.log(session);
    if (!session) {
      navigation("/login");
    } 
  }, [theme]);

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

import LoginPanel from "@/features/Login/components/loginPanel";
import ThemeToggle from "@/features/Login/components/themeToggle";

const Login = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[1fr_40%] lg:grid-cols-2 items-center justify-center bg-background bg">
      <div className="fixed top-0 right-0 h-full px-12 py-4 flex flex-col justify-between items-center">
        <ThemeToggle />
        <span className="text-4xl font-bold text-white shadow">
          Gamor
        </span>
      </div>
      <LoginPanel />
      <section className="absolute md:static md:block w-full h-full bg-[url('@assets/login-screen.webp')] md:rounded-l-2xl bg-center bg-cover"></section>
    </div>
  );
};

export default Login;

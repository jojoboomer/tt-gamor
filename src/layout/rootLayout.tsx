import { Outlet } from "react-router";

const RootLayout = () => {
  return (
      <main className="relative bg-background text-text min-h-screen w-full">
        <Outlet/>
      </main>
  );  
};

export default RootLayout;

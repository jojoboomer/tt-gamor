import { Sidebar } from "@/components/ui/sideBar";
import { useSidebar } from "@/hooks/useSidebar";
import AuthPanel from "./AuthPanel/authPanel";
import FilterPanel from "./FilterPanel/filterPanel";
import GamePanel from "./GamePanel/gamePanel";
import Header from "./Header/header";
import LateralMenu from "./Header/lateralMenu";

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Streams", href: "/streams" },
    { name: "Party", href: "/party" },
    { name: "Premium", href: "/premium" },
  ];

const HeroSection = () => {
  const { isOpen, closeSidebar, toggleSidebar } = useSidebar();

  return (
    <section className="w-full lg:h-screen px-2 md:px-10 lg:px-20 pb-12 flex flex-col">
      <Header navItems={navItems} isSidebarOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col lg:flex-row h-full overflow-hidden rounded-2xl bg-transparent lg:bg-panel">
        {/* Auth Panel */}
        <AuthPanel className="w-full lg:flex-[0.4] min-h-[70vh] p-10 flex flex-col gap-10 justify-center items-center" />

        {/* Game + Filter Panel */}
        <div className="flex flex-col md:flex-row flex-1 bg-panel overflow-hidden rounded-2xl lg:rounded-none">
          <GamePanel className="relative pt-10 w-full md:w-[50%] flex flex-col items-center justify-between gap-4 bg-primary dark:bg-accent rounded-t-4xl md:rounded-t-none" />
          <FilterPanel className="flex-1 py-10 px-12 flex flex-col gap-6 rounded-b-4xl md:rounded-b-none" />
        </div>
      </div>
      <Sidebar isOpen={isOpen} onClose={closeSidebar}>
        <LateralMenu navItems={navItems} closeSidebar={closeSidebar} />
      </Sidebar>
    </section>
  );
};

export default HeroSection;

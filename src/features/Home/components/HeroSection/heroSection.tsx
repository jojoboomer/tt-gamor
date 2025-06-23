import AuthPanel from "./AuthPanel/authPanel";
import FilterPanel from "./FilterPanel/filterPanel";
import GamePanel from "./GamePanel/gamePanel";
import Header from "./Header/header";

const HeroSection = () => (
  <section className="w-full lg:h-screen px-2 md:px-10 lg:px-20 pb-12 flex flex-col">
    <Header />

    <div className="flex flex-col lg:flex-row h-full overflow-hidden rounded-2xl bg-transparent lg:bg-panel">
      {/* Auth Panel */}
      <AuthPanel className="w-full lg:flex-[0.4] min-h-[70vh] p-10 flex flex-col gap-10 justify-center items-center" />

      {/* Game + Filter Panel */}
      <div className="flex flex-col md:flex-row flex-1 bg-panel overflow-hidden rounded-2xl lg:rounded-none">
        <GamePanel className="relative pt-10 w-full md:w-[50%] flex flex-col items-center justify-between gap-4 bg-primary dark:bg-accent rounded-t-4xl md:rounded-t-none" />
        <FilterPanel className="flex-1 py-10 px-12 flex flex-col gap-6 rounded-b-4xl md:rounded-b-none" />
      </div>
    </div>
  </section>
);

export default HeroSection;

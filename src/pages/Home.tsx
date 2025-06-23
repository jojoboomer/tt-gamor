import CategorySection from "@/features/Home/components/CategorySection/categorySection";
import FilterSection from "@/features/Home/components/FilterSection/filterSection";
import GameSection from "@/features/Home/components/GameSection/gameSection";
import Header from "@/features/Home/components/Header/header";
import AuthSection from "@/features/Home/components/MainSection/authSection";

const Home = () => {
  return (
    <>
      <section className="w-full lg:h-screen px-2 md:px-10 lg:px-20 pb-12 flex flex-col">
        <Header />

        <div className="flex flex-col lg:flex-row h-full overflow-hidden rounded-2xl bg-transparent lg:bg-panel">
          {/* Auth Panel */}
          <AuthSection className="w-full lg:flex-[0.4] min-h-[70vh] p-10 flex flex-col gap-10 justify-center items-center" />

          {/* Game + Filter Panel */}
          <div className="flex flex-col md:flex-row flex-1 bg-panel overflow-hidden rounded-2xl lg:rounded-none">
            <GameSection className="relative pt-10 w-full md:w-[50%] flex flex-col items-center justify-between gap-4 bg-primary dark:bg-accent rounded-t-4xl md:rounded-t-none" />
            <FilterSection className="flex-1 py-10 px-12 flex flex-col gap-6 rounded-b-4xl md:rounded-b-none" />
          </div>
        </div>
      </section>
      <CategorySection/>
    </>
  );
};

export default Home;

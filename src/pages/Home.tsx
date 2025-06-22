import AuthSection from "@/features/Home/components/authSection";
import FilterSection from "@/features/Home/components/filterSection";
import GameSection from "@/features/Home/components/gameSection";
import Header from "@/features/Home/components/header";

const Home = () => {
  return (
    <section className="h-screen w-full px-16 flex flex-col pb-12 ">
      <Header />
      <div className="h-full overflow-hidden bg-panel flex rounded-2xl">
        <AuthSection />
        <GameSection />
        <FilterSection />
      </div>
    </section>
  );
};

export default Home;

import AuthSection from "@/features/Home/components/authSection";
import GameSection from "@/features/Home/components/gameSection";
import Header from "@/features/Home/components/header";
import PlayerSection from "@/features/Home/components/playerSection";

const Home = () => {
  return (
    <section className="h-screen w-full px-16 flex flex-col pb-12 ">
      <Header />
      <div className="h-full overflow-hidden bg-panel flex rounded-2xl ">
        <AuthSection />
        <GameSection />
        <PlayerSection />
      </div>
    </section>
  );
};

export default Home;

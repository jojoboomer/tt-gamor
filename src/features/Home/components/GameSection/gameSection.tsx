import Soldier from "@/assets/soldier3.webp";
import useFiltersStore from "@/store/filters.store";
import DigitalClock from "./digitalClock";

const GameSection = () => {
  const {
    filters: { game },
  } = useFiltersStore();

  return (
    <div className="relative w-[30%]  flex flex-col bg-primary items-center gap-6 overflow-hidden">
      <div className="p-10">
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold">{game?.name}</h2>
          <p className="text-sm">Join Live Stream</p>
        </div>
        <DigitalClock />
      </div>
      <img src={Soldier} alt="cod soldier" className="absolute inset-0" />
    </div>
  );
};

export default GameSection;

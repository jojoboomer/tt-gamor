import Soldier from "@/assets/soldier3.webp";
import DigitalClock from "./digitalClock";

const GameSection = () => {
  return (
   <div className="w-[30%] h-full p-10 flex flex-col bg-primary items-center gap-6 overflow-hidden">
      <div className="text-center">
        <h2 className="text-white text-lg font-semibold">COD New Season</h2>
        <p className="text-sm">Join Live Stream</p>
      </div>
      <DigitalClock />
      <img src={Soldier} alt="cod soldier" className="w-[50%]" />
    </div>
  );
};

export default GameSection;

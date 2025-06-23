import { cn } from "@/lib/utils";
import Soldier1 from "@assets/soldier1.webp";
import Soldier2 from "@assets/soldier2.webp";
import ActiveEvent from "./activeEvent";
import DigitalClock from "./digitalClock";

const GamePanel = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <div className="text-center space-y-2">
        <h2 className="text-white text-lg font-semibold">Fornite New Season</h2>
        <p className="text-sm text-fuchsia-900 dark:text-orange-700 font-semibold">
          Join Live Stream
        </p>
      </div>
      <DigitalClock />
      <ActiveEvent />
      <img
        src={Soldier1}
        alt="fornite soldier"
        className="h-[350px] dark:hidden block"
      />
      <img
        src={Soldier2}
        alt="cod soldier"
        className="h-[350px] hidden dark:block"
      />
    </div>
  );
};

export default GamePanel;

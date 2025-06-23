import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const DigitalClock = ({ className }: { className?: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className={cn("w-fit bg-white text-primary dark:text-accent rounded-4xl px-6 py-2 shadow-lg text-lg font-semibold text-center tracking-widest",className)}>
      {formatTime(time)}
    </div>
  );
};

export default DigitalClock;

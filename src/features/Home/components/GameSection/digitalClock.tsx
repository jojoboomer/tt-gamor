import { useEffect, useState } from "react";

const DigitalClock = () => {
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
    <div className=" w-fit bg-white text-primary rounded-4xl px-6 py-2 shadow-lg
     text-lg font-semibold text-center tracking-widest">
      {formatTime(time)}
    </div>
  );
};

export default DigitalClock;

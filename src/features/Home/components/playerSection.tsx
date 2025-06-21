import Radio from "@/components/ui/radio";
import { useState } from "react";
import UserFilter from "./userFilter";

const options = [
  { value: "party", label: "Party" },
  { value: "martch", label: "Matchs" },
  { value: "streams", label: "Streams" },
];

const PlayerSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string>("party");

  const handleRadioOnChange = (e) => {
    setSelectedOptions(e);
  };

  return (
    <div className="flex-1 p-10 flex flex-col gap-10 h-full overflow-hidden">
      <div className="space-y-4 min-h-0">
        <h3 className="font-semibold">
          <span className="text-lg text-gray-400">01.</span> Choose Platform
        </h3>
        <Radio
          name="platform"
          selectedOption={selectedOptions}
          onChangeOption={handleRadioOnChange}
          options={options}
        />
      </div>
      <UserFilter />
      
    </div>
  );
};

export default PlayerSection;

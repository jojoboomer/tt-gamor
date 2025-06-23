import Radio from "@/components/ui/radio";
import useGamorStore from "@/store/main.store";
import { useCallback } from "react";

type PlatformOption = {
  value: Platform;
  label: string;
};

const platforms: PlatformOption[] = [
  { value: "party", label: "Party" },
  { value: "match", label: "Match" },
  { value: "stream", label: "Stream" },
];

const PlatformSelector = () => {
  const { filters, setFilters } = useGamorStore();

  const onChange = useCallback(
    (value: string) => setFilters({ ...filters, platform: value as Platform }),
    [filters, setFilters]
  );

  return (
    <div className="flex justify-center">
      <Radio
        selectedOption={filters.platform}
        onChangeOption={onChange}
        options={platforms}
      />
    </div>
  );
};

export default PlatformSelector;

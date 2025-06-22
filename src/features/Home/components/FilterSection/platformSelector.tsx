import Radio from "@/components/ui/radio";
import useFiltersStore, { type Platform } from "@/store/filters.store";
import { useCallback } from "react";

type PlatformOption = {
  value: string;
  label: Platform;
};

const platforms: PlatformOption[] = [
  { value: "party", label: "Party" },
  { value: "martch", label: "Match" },
  { value: "streams", label: "Stream" },
];

const PlatformSelector = () => {
  const { filters, setFilters } = useFiltersStore();

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

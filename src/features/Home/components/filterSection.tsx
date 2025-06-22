import Radio from "@/components/ui/radio";
import useFiltersStore, { type Platform } from "@/store/filters.store";
import UserFilter from "./userFilter";

type PlatformOption = {
  value: string;
  label: Platform;
};
const platforms: PlatformOption[] = [
  { value: "party", label: "Party" },
  { value: "martch", label: "Match" },
  { value: "streams", label: "Stream" },
];

const FilterSection = () => {
  const { filters, setFilters } = useFiltersStore();

  const handleRadioOnChange = (e) => {
    setFilters({ ...filters, platform: e });
  };

  return (
    <div className="flex-1 p-10 flex flex-col gap-10 h-full overflow-hidden">
      <div className="space-y-4 min-h-0">
        <h3 className="font-semibold">
          <span className="text-lg text-gray-400">01.</span> Choose Platform
        </h3>
        <Radio
          name="platform"
          selectedOption={filters.platform}
          onChangeOption={handleRadioOnChange}
          options={platforms}
        />
      </div>
      <div className="space-y-4 min-h-0 h-full">
        <h3 className="font-semibold">
          <span className="text-lg text-gray-400">02.</span> Searching Game
        </h3>
        <UserFilter />
      </div>
    </div>
  );
};

export default FilterSection;

interface Props {
  options: { label: string; value: string }[];
  name: string;
  selectedOption: string;
  onChangeOption: (value: string) => void;
}

const Radio = ({ options, selectedOption, onChangeOption, name }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 rounded-4xl select-none p-1">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex rounded-4xl"
        >
          <input
            type="radio"
            value={option.value}
            name={name}
            checked={selectedOption === option.value}
            onChange={() => onChangeOption(option.value)}
            className="peer hidden"
          />
          <span className="text-sm font-semibold text-gray-700 peer-hover:cursor-pointer peer-checked:text-black tracking-normal peer-checked:bg-neutral px-4 py-2 rounded-4xl transition duration-300 ease-in-out">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Radio;

interface Props {
  options: { label: string; value: string }[];
  selectedOption: string;
  onChangeOption: (value: string) => void;
  className?: string;
}

const Radio = ({ options, selectedOption, onChangeOption,className }: Props) => {

  const getGliderPosition = () => {
    const activeIndex = options.findIndex((tab) => tab.value === selectedOption)
    return `translateX(${activeIndex * 100}%)`
  }

  return (
    <div className={`inline-block text-xs text-text/80 rounded-4xl dark:bg-card p-1 ${className}`}>
      <div className="relative flex">
        {options.map((option) => (
          <div key={option.value} className="relative z-10">
            <input
              type="radio"
              id={option.value}
              checked={selectedOption === option.value}
              onChange={() => onChangeOption(option.value)}
              className="sr-only"
            />
            <label
              htmlFor={option.value}
              className={`
                relative flex items-center justify-center h-[40px] w-[100px] 
                 font-medium rounded-full cursor-pointer
                transition-colors duration-150 ease-in
                ${selectedOption === option.value ? "text-text" : ""}
              `}
            >
              {option.label}
            </label>
          </div>
        ))}

        <div
          className="absolute z-0 h-[40px] w-[100px] bg-neutral rounded-4xl transition-transform duration-[250ms] ease-out"
          style={{
            transform: getGliderPosition(),
          }}
        />
      </div>
    </div>
  )
};

export default Radio;

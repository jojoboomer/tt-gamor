// Defines the properties that the `Radio` component can receive.
interface Props {
  options: { label: string; value: string }[]; // An array of objects, where each object represents a radio option with its display text (`label`) and unique identifier (`value`).
  selectedOption: string; // The `value` of the currently selected option.
  onChangeOption: (value: string) => void; // A function that is called when a new option is selected, receiving the `value` of the selected option.
  className?: string; // Optional additional CSS classes to apply to the main container of the component.
}

const Radio = ({
  options,
  selectedOption,
  onChangeOption,
  className,
}: Props) => {
  // Function to calculate the position of the animated "glider".
  // It finds the index of the currently selected option and returns a CSS transform string.
  const getGliderPosition = () => {
    const activeIndex = options.findIndex(
      (tab) => tab.value === selectedOption
    );
    return `translateX(${activeIndex * 100}%)`;
  };

  return (
    <div
      className={`inline-block text-xs text-text/80 rounded-4xl dark:bg-card p-1 ${className}`}
      role="tablist"
    >
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
              aria-selected={selectedOption === option.value}
              className={`
                relative flex items-center justify-center h-[40px] w-[80px] lg:w-[80px] xl:w-[100px] 
                 font-medium rounded-full cursor-pointer
                transition-colors duration-150 ease-in
                ${selectedOption === option.value ? "text-text" : ""}
              `}
            >
              {option.label}
            </label>
          </div>
        ))}

        {/* The animated "glider" that visually indicates the selected option. */}
        <div
          className="shadow-xs absolute z-0 h-[40px] w-[80px] lg:w-[80px] xl:w-[100px] bg-neutral rounded-4xl transition-transform duration-[250ms] ease-out"
          style={{
            transform: getGliderPosition(),
          }}
        />
      </div>
    </div>
  );
};

export default Radio;

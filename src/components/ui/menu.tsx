import { useEffect, useRef, useState } from 'react';

const Menu = ({ trigger, options, renderOption }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen((val) => !val)}>
        {trigger}
      </div>

      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-panel shadow-lg rounded-md overflow-hidden">
          {options.map((opt, i) => (
            <li key={i}>
              {renderOption(opt, toggleOpen)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
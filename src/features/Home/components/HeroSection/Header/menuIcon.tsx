import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="relative flex w-8 flex-col gap-1.5 bg-transparent p-0 z-[1001]"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div
        className={`h-[3px] w-full rounded-sm bg-text transition-all duration-300 ease-out 
          ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}
      ></div>
      <div
        className={`h-[3px] w-full rounded-sm bg-text transition-all duration-150 ease-out 
          ${isOpen ? 'opacity-0' : ''}`}
      ></div>
      <div
        className={`h-[3px] w-full rounded-sm bg-text transition-all duration-300 ease-out 
          ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
      ></div>
    </button>
  );
};
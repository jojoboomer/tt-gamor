"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

// --- Dropdown Context ---
// Creates a React Context object. This will be used to pass `isOpen`, `toggle`, and `close`
const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

// --- useDropdown Hook ---
// A custom hook that consumes the DropdownContext.
// This hook makes the context's values (`isOpen`, `toggle`, `close`) easily accessible
// to any child component wrapped within the <Dropdown.Provider>.
const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown");
  }
  return context;
};

// --- Dropdown Component (Parent/Root) ---
// Props interface for the main Dropdown component.
interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

// The main Dropdown component. It manages the dropdown's state and provides it via context.
export function Dropdown({ children, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  // Effect hook to handle clicks outside the dropdown.
  // It attaches a 'mousedown' event listener to the document.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Effect hook to handle the 'Escape' key press.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={dropdownRef} className={`relative inline-block ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

// --- DropdownTrigger Component ---
// Props interface for the dropdown trigger element (the button that opens/closes the menu).
interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
  showChevron?: boolean; // Whether to display a rotating chevron icon.
  asChild?: boolean; // Boolean to simulate an 'asChild' prop behavior for styling.
  // If true, basic button styles are not applied, allowing children to define their own.
}
export function DropdownTrigger({
  children,
  className = "",
  showChevron = true,
  asChild = false,
}: // Conditionally applies default button styles based on `asChild`.
// If `asChild` is false, it applies standard button styling (flex, padding, background, border, hover, focus).
// If `asChild` is true, it relies on the `children` to provide its own styling.
DropdownTriggerProps) {
  const { isOpen, toggle } = useDropdown();

  return (
    <button
      onClick={toggle}
      className={cn(
        !asChild &&
          `flex items-center justify-between gap-2 px-4 py-2 
        bg-white border border-gray-300 rounded-lg
        hover:bg-gray-50 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:border-transparent
        transition-all duration-200 ease-in-out`,
        className
      )}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <span>{children}</span>
      {showChevron && (
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      )}
    </button>
  );
}

// --- DropdownOption Component ---
// Props interface for individual options within the dropdown menu.
interface DropdownOptionProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
export function DropdownOption({
  children,
  onClick,
  className = "",
  disabled = false,
}: DropdownOptionProps) {
  const { close } = useDropdown();

  const handleClick = () => {
    if (!disabled) {
      onClick?.();
      close();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        w-full text-left text-sm
        hover:text-text focus:bg-black/5
        focus:outline-none transition-colors duration-150
        ${disabled ? "text-gray-400 cursor-not-allowed" : "text-text/80"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// --- DropdownMenu Component ---
// Props interface for the container of dropdown options.
interface DropdownMenuProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}
export function DropdownMenu({
  children,
  direction = "right",
  className = "",
}: DropdownMenuProps) {
  const { isOpen } = useDropdown();

  const directionClass = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <div
      className={cn(
        `absolute top-full mt-1 min-w-full bg-panel rounded-lg shadow-md p-3 space-y-2
        z-50 overflow-hidden transition-all duration-200 ease-in-out origin-top`,
        directionClass[direction],
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
}

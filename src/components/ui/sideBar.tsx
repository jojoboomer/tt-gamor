import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      sidebarRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full bg-panel 
          flex flex-col z-[1000] items-center justify-center
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }}
        tabIndex={-1}
      >
        <nav className="text-center text-text">
          {children} 
        </nav>
      </aside>
    </>,
    document.body
  );
};
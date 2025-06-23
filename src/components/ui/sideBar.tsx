import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Defining the props interface for the Sidebar component.
interface SidebarProps {
  isOpen: boolean; // A boolean indicating whether the sidebar is currently open or closed.
  onClose: () => void; // A function to call when the sidebar needs to be closed.
  children: React.ReactNode; // The content to be rendered inside the sidebar.
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

    // Effect hook to manage body scroll and focus when the sidebar opens/closes.
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

  // Renders the sidebar using a React Portal.
  // This allows the sidebar to exist directly under `document.body`,
  // preventing issues with parent `overflow` styles and ensuring it's always on top.
  return createPortal(
    <>
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full bg-panel 
          flex flex-col z-[100] items-center justify-center
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }}
        tabIndex={-1}
      >
                {/* Navigation container inside the sidebar. */}
        <nav className="text-center text-text">
          {children} 
        </nav>
      </aside>
    </>,
    document.body
  );
};
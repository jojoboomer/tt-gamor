// src/hooks/useSidebar.ts
import { useCallback, useEffect, useState } from 'react';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768; 

      if (isLargeScreen && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, setIsOpen]);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};
// src/hooks/useSidebar.ts
import { useCallback, useState } from 'react';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
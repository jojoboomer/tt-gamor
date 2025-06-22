import { createContext, useContext, useState, type ReactNode } from "react";

const ModalContext = createContext<{
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  modalOpen: false,
  setModalOpen: () => null,
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal is being used outside it's provider");
  }

  return context;
};

export { ModalContext, ModalProvider };


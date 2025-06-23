import { useModalContext } from "@/store/modal.context";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modalOpen, setModalOpen } = useModalContext();

  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [setModalOpen, modalOpen]);

  if (!modalOpen || !modalRoot) {
    return null;
  }
  
  const closeModal = () => {
    setModalOpen(false);
  };

  return createPortal(
    <div
      className="bg-black/60 fixed inset-0 w-full min-h-screen z-[102] overflow-hidden overflow-y-auto flex flex-col items-center justify-center "
      onClick={closeModal}
    >
      <div
        className=""
        onClick={handleContentClick}
        ref={modalRef}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

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

  // Retrieves the DOM element where the modal will be rendered via React Portal.
  // It's assumed that an element with `id="modal"` exists in `index.html`.
  const modalRoot = document.getElementById("modal");

  // Event handler to stop propagation of click events originating from within the modal content.
  // This prevents clicks inside the modal from closing it when the overlay is clicked.
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Effect hook to handle keyboard events, specifically the 'Escape' key.
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

  // Early exit: If the modal is not open or the portal root element is not found,
  // the component renders nothing.
  if (!modalOpen || !modalRoot) {
    return null;
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  // Renders the modal content using `createPortal`.
  // The first argument is the JSX to be rendered, the second is the DOM node where it should be rendered.
  return createPortal(
    <div
      className="bg-black/60 fixed inset-0 w-full min-h-screen z-[102] overflow-hidden overflow-y-auto flex flex-col items-center justify-center "
      onClick={closeModal}
    >
      <div className="" onClick={handleContentClick} ref={modalRef}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

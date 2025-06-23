import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function ReactPopover({ children, content }) {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const [popoverStyle, setPopoverStyle] = useState({});

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeft = () => {
    setShow(false);
  };

  // ⭐ NUEVO: useEffect para calcular la posición ⭐
  useEffect(() => {
    if (show && triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();

      setPopoverStyle({
        top: triggerRect.top - popoverRect.height, 
        left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      });
    }
  }, [show]);

  const portalRoot = document.getElementById("popover-root");

  if (!portalRoot) {
    console.error("No se encontró el elemento 'popover-root' en el DOM.");
    return null;
  }

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center"
    >
      <div>{children}</div>

      {ReactDOM.createPortal(
        <div
          ref={popoverRef}
          className={cn(
            "fixed z-[150]",
            "transition-all duration-300 ease-in-out",
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
          style={popoverStyle}
        >
          <div className="rounded bg-panel opacity-90 p-2 text-sm shadow-md text-text mb-[10px]">
            {content}
          </div>
        </div>,
        portalRoot
      )}
    </div>
  );
}

export default ReactPopover;

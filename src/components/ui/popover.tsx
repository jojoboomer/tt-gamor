import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ReactDOM from "react-dom";

interface ReactPopoverProps {
  children: ReactNode;
  content: ReactNode;
};

function ReactPopover({ children, content } : ReactPopoverProps) {
  const [show, setShow] = useState(false);
const triggerRef = useRef<HTMLDivElement | null>(null);
const popoverRef = useRef<HTMLDivElement | null>(null);
  const [popoverStyle, setPopoverStyle] = useState({});
  // Event handler for when the mouse enters the trigger area.
  // Sets `show` to true, initiating the popover's appearance animation.
  const handleMouseOver = () => {
    setShow(true);
  };
  // Event handler for when the mouse leaves the trigger area.
  // Sets `show` to false, initiating the popover's disappearance animation.
  const handleMouseLeft = () => {
    setShow(false);
  };

  // Effect hook to calculate the popover's position whenever `show` state changes.
  useEffect(() => {
    if (show && triggerRef.current && popoverRef.current) {
      // Get the size and position of the trigger element relative to the viewport.
      const triggerRect = triggerRef.current.getBoundingClientRect();
      // Get the size and position of the popover element relative to the viewport.
      const popoverRect = popoverRef.current.getBoundingClientRect();

      // Calculates the `top` and `left` CSS values for the popover.
      setPopoverStyle({
        top: triggerRect.top - popoverRect.height,
        left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      });
    }
  }, [show]);

  // Attempts to find the DOM element with the ID "popover-root" where the popover will be rendered.
  const portalRoot = document.getElementById("popover-root");

  // Early exit: If the portal root element is not found, log an error and render nothing.
  if (!portalRoot) {
    console.error("Error finding 'popover-root' element in DOM.");
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
          role="tooltip"
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

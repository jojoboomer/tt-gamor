import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

function ReactPopover({ children, content } : { children: React.ReactNode, content: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeft = () => {
    setShow(false);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center"
    >
      <div>{children}</div>
      <div
        className={cn(
          "min-w-fit w-fit inline h-fit absolute bottom-[100%] z-50",
          "transition-all duration-300 ease-in-out", 
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none" 
        )}
      >
        <div className="rounded bg-panel opacity-90 p-2 text-sm shadow-md text-text mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;
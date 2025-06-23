import { useRef, useState } from "react";

function ReactPopover({ children, content }) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    setTimeout(() => {
      setShow(true);
    }, 500);
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
        hidden={!show}
        className="min-w-fit w-fit inline h-fit absolute bottom-[100%] z-50"
      >
        <div className="rounded bg-panel opacity-90 p-2 text-sm shadow-md text-text mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;

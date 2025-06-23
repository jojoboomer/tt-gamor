import useGamorStore from "@/store/main.store";
import { useModalContext } from "@/store/modal.context";
import { SlidersHorizontal, X } from "lucide-react";
import { useCallback } from "react";
import ButtonWithPopover from "../../buttonWithPopover";

const GameSelector = () => {
  const { filters, resetFilters, resetResults } = useGamorStore();
  const { setModalOpen } = useModalContext();

  const handleOpenModal = useCallback(() => setModalOpen(true), [setModalOpen]);
  const handleClearFilters = useCallback(() => {
    resetFilters();
    resetResults();
  }, [resetFilters, resetResults]);

  return (
    <div className="w-full border-b-[1px] border-border pb-2 flex items-center justify-between">
      <span> {filters.game && filters.game.name} </span>
      <div className="flex items-center gap-2">
        <ButtonWithPopover
          content={"Search game"}
          variant="text"
          onClick={handleOpenModal}
        >
          <SlidersHorizontal className="w-4 h-4" />
        </ButtonWithPopover>
        <ButtonWithPopover
          content={"Clear event filters"}
          variant="text"
          className="hover:scale-120"
          onClick={handleClearFilters}
        >
          <X className="w-4 h-4 " />
        </ButtonWithPopover>
      </div>
    </div>
  );
};

export default GameSelector;

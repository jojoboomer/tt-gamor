import Button from "@/components/ui/buttom";
import useFiltersStore from "@/store/filters.store";
import { useModalContext } from "@/store/modal.context";
import { SlidersHorizontal, X } from "lucide-react";
import { useCallback } from "react";

const GameSelector = () => {
  const { filters, resetFilters, resetResults } = useFiltersStore();
  const { setModalOpen } = useModalContext();

  const handleOpenModal = useCallback(() => setModalOpen(true), [setModalOpen]);
  const handleClearFilters = useCallback(() => {
    resetFilters();
    resetResults();
  }, [resetFilters, resetResults]);

  return (
    <div className="w-full border-b-[1px] border-border pb-2 flex items-center justify-between">
      <span> {filters.game && filters.game.name} </span>
      <div>
        <Button variant="text"  onClick={handleOpenModal}>
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
        <Button variant="text"  onClick={handleClearFilters}>
          <X className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  );
};

export default GameSelector;

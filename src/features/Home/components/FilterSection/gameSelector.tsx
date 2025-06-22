import Button from "@/components/ui/buttom";
import useFiltersStore from "@/store/filters.store";
import { useModalContext } from "@/store/modal.context";
import { Filter } from "lucide-react";
import { useCallback } from "react";

const GameSelector = () => {
  const { filters } = useFiltersStore();
  const { setModalOpen } = useModalContext();

  const handleOpenModal = useCallback(() => setModalOpen(true), [setModalOpen]);

  return (
    <div className="w-full border-b-[1px] border-border pb-3 flex items-center justify-between">
      <span> {filters.game && filters.game.name} </span>
      <Button variant="text" size="icon" onClick={handleOpenModal}>
        <Filter className="w-4 h-4 " />
      </Button>
    </div>
  );
};

export default GameSelector;

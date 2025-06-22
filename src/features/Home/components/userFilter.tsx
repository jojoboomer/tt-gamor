import Button from "@/components/ui/buttom";
import mockData from "@/data/mock.json";
import useFiltersStore from "@/store/filters.store";
import { useModalContext } from "@/store/modal.context";
import { Filter } from "lucide-react";

const UserFilter = () => {
  const { modalOpen, setModalOpen } = useModalContext();
  const { filters, setFilters } = useFiltersStore();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="relative flex flex-col items-center flex-1 min-h-0 w-full bg-white shadow-lg px-6 py-3 rounded-2xl ">
      <div className="w-full border-b-[1px] border-border pb-3 flex items-center justify-between">
        <span> {filters.game && filters.game.name} </span>
        <Button variant="text" size="icon" onClick={handleOpenModal}>
          <Filter className="w-4 h-4 " />
        </Button>
      </div>
      <ul className="relative w-full py-3 space-y-2 flex-1 overflow-hidden">
        {mockData.streamers.map((user, index) => (
          <li key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm w-4">{index + 1}</span>
              <span className="font-medium text-gray-900">{user.username}</span>
            </div>
            <button className="w-8 h-8 rounded-full border border-border bg-white hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </li>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
      </ul>
      <Button size="lg" className="absolute bottom-4 rounded-md w-[90%]">
        Search Now
      </Button>
    </div>
  );
};

export default UserFilter;

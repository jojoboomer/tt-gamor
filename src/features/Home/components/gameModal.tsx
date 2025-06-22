import { Modal } from "@/components/ui/modal";
import type { Game } from "@/store/filters.store";
import useFiltersStore from "@/store/filters.store";
import { useModalContext } from "@/store/modal.context";
import { categories, games } from "@data/games.json";

const GameModal = () => {
  const { setGame } = useFiltersStore();
  const { setModalOpen } = useModalContext();

  const handleSelectGame = (game: Game) => {
    setGame(game);
    setModalOpen(false);
  };

  return (
    <Modal>
      <div className="relative max-w-[95vw] max-h-[90vh] w-full md:max-w-xl px-4 py-6 sm:px-6 lg:px-8 bg-panel rounded-2xl flex flex-col overflow-hidden">
        <header className="">
        </header>

        <div className="flex-1 overflow-y-auto pb-4 no-scrollbar">
          <div className="space-y-6 ">
            {categories.map((category) => (
              <section key={category.id} className="space-y-3">
                <h3 className="text-lg font-semibold text-primary sticky -top-1 p-1 bg-panel z-10">
                  {category.name}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {games
                    .filter((game) => game.category_id === category.id)
                    .map((game) => (
                      <article
                        key={game.id}
                        onClick={() => handleSelectGame(game)}
                        className="group flex flex-col rounded-lg overflow-hidden hover:bg-gray-800/10 transition-colors"
                      >
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <img
                            src={game.box_art_url.replace(
                              "{width}x{height}",
                              "285x380"
                            )}
                            alt={game.name}
                            className="w-full h-full bg-cover transition-transform group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="px-2 py-2 text-sm font-medium text-center text-text">
                          {game.name}
                        </h4>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GameModal;

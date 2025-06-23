import Input from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import useGamorStore from "@/store/main.store";
import { useModalContext } from "@/store/modal.context";
import { categories, games } from "@data/games.json";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

//TODO Organice by category dinamically
const GameModal = () => {
  const { setGame } = useGamorStore();
  const { setModalOpen } = useModalContext();
  const [search, setSearch] = useState<string>('');

  const handleSelectGame = (game: Game) => {
    setGame(game);
    setSearch('')
    setModalOpen(false);
  };

  const filteredAndGroupedGames = useMemo(() => {
    const lowercasedSearch = search.toLowerCase();
    const filteredGames = games.filter(game =>
      game.name.toLowerCase().includes(lowercasedSearch)
    );

    const grouped: { [categoryId: string]: Game[] } = {};
    filteredGames.forEach(game => {
      if (!grouped[game.category_id]) {
        grouped[game.category_id] = [];
      }
      grouped[game.category_id].push(game);
    });

    return categories
      .map(category => ({
        ...category,
        games: grouped[category.id] || [] 
      }))
      .filter(category => category.games.length > 0); 
  }, [search]);

  return (
    <Modal>
      <div className="relative w-[min(95vw,48rem)] h-[min(90vh,40rem)] px-4 py-6 sm:px-6 lg:px-8 bg-panel rounded-2xl flex flex-col overflow-hidden">
        <header className="py-2 flex z-20 sticky top-0 bg-panel"> 
          <Input
            className="w-full max-w-xs" 
            type="text"
            name="game"
            id="game"
            placeholder="Search game by name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            leftChildren={<Search className="h-5 w-5 text-text-secondary" />}
          />
        </header>

        <div className="flex-1 overflow-y-auto pb-4 no-scrollbar mt-4">
          <div className="space-y-6">
            {filteredAndGroupedGames.length > 0 ? (
              filteredAndGroupedGames.map((category) => (
                <section key={category.id} className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary sticky -top-1 p-1 bg-panel z-10">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.games.map((game) => (
                      <article
                        key={game.id}
                        onClick={() => handleSelectGame(game)}
                        className="group flex flex-col rounded-lg overflow-hidden hover:bg-gray-800/10 transition-colors cursor-pointer" // Añadido cursor-pointer
                      >
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <img
                            src={game.box_art_url.replace(
                              "{width}x{height}",
                              "285x380"
                            )}
                            alt={game.name}
                            className="w-full h-full bg-cover transition-transform group-hover:scale-105" // object-cover para asegurar que la imagen cubre el área
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
              ))
            ) : (
              <p className="text-center text-text-secondary mt-10">No games found matching your search.</p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GameModal;

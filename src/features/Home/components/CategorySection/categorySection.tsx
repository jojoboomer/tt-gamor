import { categories } from "@data/games.json";
import CategoryCard from "./categoryCard";

const CategorySection = () => {
  return (
    <section className="min-h-screen w-full py-16 px-2 md:px-8 lg:px-16 space-y-4">
      <h2 className="font-semibold">Trending Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center">
        {categories.map((category, index) => (
          <CategoryCard index={index} key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

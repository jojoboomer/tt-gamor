import Card from "@/components/ui/card";
import IMG from "@assets/login-screen.webp";
import { categories } from "@data/games.json";
import { ArrowRight } from "lucide-react";

const CategorySection = () => {
  return (
    <section className="h-screen w-full p-16 space-y-4">
      <h2>Trending Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {categories.map((category) => (
          <Card
            className="group relative overflow-hidden aspect-video h-40 flex-col-reverse items-end bg-center bg-cover hover:cursor-pointer"
            // style={{ backgroundImage: `url(${category.box_art_url})` }}
            style={{ backgroundImage: `url(${IMG})` }}
            key={category.id}
          >
            <div className="absolute inset-0 bg-panel group-hover:bg-primary/40 transition-colors duration-200 ease-in-out"></div>
            <div className=" z-10 inline-flex items-center gap-2">
              <p className="text-xl">{category.name}</p>
              <ArrowRight className="relative w-0 -left-8 group-hover:w-fit group-hover:left-0 transition-all duration-200 ease-out" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

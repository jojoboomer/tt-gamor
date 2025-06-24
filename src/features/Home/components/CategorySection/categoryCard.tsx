import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
  category: any;
  index: number;
}
const CategoryCard = ({ className, category, index }: Props) => {
  return (
    <Card
      className={cn(
        "group relative rounded-lg overflow-hidden aspect-video w-full lg:w-auto h-40 flex-col-reverse items-end hover:cursor-pointer  ",
        className
      )}
      key={category.id}
    >
      <div style={{ backgroundImage: `url(${category.box_art_url})` }} className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-center bg-cover transition-opacity duration-200`}></div>
      <div className="absolute z-10 inset-0 bg-panel group-hover:bg-primary/40 transition-colors duration-200 ease-in-out"></div>
      <div className="w-full h-full z-10 flex flex-col gap-2 text-xl justify-between ">
        <div className="text-text group-hover:text-white">{index + 1}. {category.name}</div>
        <div className="inline-flex gap-1 items-center justify-end">
          <ArrowRight className="relative w-0 -left-8 group-hover:text-white group-hover:w-fit group-hover:left-0 transition-all duration-200 ease-out" />
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;

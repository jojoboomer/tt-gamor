import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
  category: any;
}
const CategoryCard = ({ className, category }: Props) => {
  return (
    <Card
      className={cn("group relative aspect-video w-full lg:w-auto h-40 flex-col-reverse items-end bg-center bg-cover hover:cursor-pointer", className)}
      style={{ backgroundImage: `url(${category.box_art_url})` }}
      key={category.id}
    >
      <div className="absolute z-10 inset-0 rounded-2xl bg-panel group-hover:bg-primary/40 transition-colors duration-200 ease-in-out"></div>
      <div className=" z-10 inline-flex items-center gap-2 ">
        <p className="text-xl group-hover:text-white">{category.name}</p>
        <ArrowRight className="relative w-0 -left-8 group-hover:w-fit group-hover:left-0 transition-all duration-200 ease-out" />
      </div>
    </Card>
  );
};

export default CategoryCard;

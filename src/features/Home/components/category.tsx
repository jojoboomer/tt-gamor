import mockData from "@/data/mock.json";
import Card from "@components/ui/card";

const Category = () => {
  return (
    <section className="h-screen w-full p-16">
      <h2>Trending Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {mockData.categories.map((category) => (
          <Card>
            <h4>
              <span></span>
              {category.name}
            </h4>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Category;

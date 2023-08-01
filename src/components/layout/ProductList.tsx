//Types
import { ProductListProps } from "@/types/props";
import NoResult from "../ui/NoResult";
import ProductCard from "../ui/ProductCard";

const ProductList = ({ items, title }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 ? <NoResult /> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

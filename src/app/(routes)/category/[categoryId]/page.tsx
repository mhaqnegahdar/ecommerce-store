export const revalidate = 0;

// Hooks / Packages

// Components
import Billboard from "@/components/layout/Billboard";
import Container from "@/components/ui/Container";
import Filter from "./components/Filter";

// Actions
import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";

// Types
import { CategoryPageProps } from "@/types/props";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/MobileFilters";

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = params;
  const { colorId, sizeId } = searchParams;

  //   Fetching Datas
  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(categoryId);

  return (
    <main className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Filters */}
            <MobileFilters colors={colors} sizes={sizes} />
            {/* Add Mobile Filters */}
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name={"Sizes"} data={sizes} />
              <Filter valueKey="colorId" name={"Colors"} data={colors} />
            </div>
            {/* Products */}
            <div className="my-6  lg:col-span-4 lg:mt-0">
              {products.length === 0 ? <NoResult /> : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(item => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;

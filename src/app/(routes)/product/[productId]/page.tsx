// Components
import Container from "@/components/ui/Container";
import ProductList from "@/components/layout/ProductList";
import Gallery from "@/components/layout/gallery";
import Info from "@/components/layout/Info";

// Actions
import getProducts from "@/actions/getProducts";
import getProduct from "@/actions/getProduct";

// Types
import { SingleProductProps } from "@/types/props";

const SingleProduct = async ({ params: { productId } }: SingleProductProps) => {
  // Data
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <main>
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <div>
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </main>
  );
};

export default SingleProduct;

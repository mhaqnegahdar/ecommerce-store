// Components
import Container from "@/components/ui/Container";
import Billboard from "@/components/layout/Billboard";
import ProductList from "@/components/layout/ProductList";

// Actions
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard(`1837b96f-9cfe-46b7-a1c8-e1625f665969`);
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <main className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
        <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </section>
      </main>
    </Container>
  );
}

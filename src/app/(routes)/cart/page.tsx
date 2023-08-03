// Components
import Container from "@/components/ui/Container";
import CartPageClient from "./components/CartPageClient";
import Summary from "./components/Summary";

const CartPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>{" "}
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <CartPageClient />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;

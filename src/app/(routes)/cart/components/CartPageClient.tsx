"use client";

// Hooks / Packages
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectState } from "@/redux/cart/cartSlice";

// Components
import CartItem from "./CartItem";
import Summary from "./Summary";

const CartPageClient = () => {
  const [mounted, setMounted] = useState(false);

  const { items } = useAppSelector(selectState);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {/* Items */}
      <div className="lg:col-span-7">
        {items.length === 0 ? (
          <p className="text-neutral-500">No items added to cart</p>
        ) : null}
        <ul>
          {items.map(item => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
      {/* Summmary */}
      <Summary items={items} />
    </>
  );
};

export default CartPageClient;

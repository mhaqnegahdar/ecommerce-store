"use client";

// Hooks / Packages
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/cart/cartSlice";

// Components
import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/Button";

// Icons
import { ShoppingCart } from "lucide-react";

// Types
import { InfoProps } from "@/types/props";

const Info = ({ data }: InfoProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* Title & Price */}
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          {" "}
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      {/* Info */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <p
            className="w-6 h-6 rounded-full border-collapse border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <p>{data.size.name}</p>
        </div>
      </div>
      {/* Cart Button */}
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={() => dispatch(addToCart({ item: data }))}
          className="flex items-center gap-x-2"
        >
          Add To Cart <ShoppingCart />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Info;

"use client";

// Hooks / Packages
import Image from "next/image";
import { toast } from "react-hot-toast";
import { removeFromCart, emptyCart } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { MouseEventHandler } from "react";

// Components
import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";

// Types
import { InfoProps } from "@/types/props";

// Icons
import { X } from "lucide-react";

const CartItem = ({ data }: InfoProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          className="object-cover object-center"
          alt={data.name}
        />
      </div>
      <div className="relative ms-4 flex flex-1 flex-col justify-between sm:ms-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pe-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pe-0 ">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ms-4 border-s border-gray-200 ps-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

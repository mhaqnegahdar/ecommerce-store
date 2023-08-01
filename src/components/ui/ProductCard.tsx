"use client";

// Hooks / Packages
import Image from "next/image";

// Components
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";

// Types
import { ProductCardProps } from "@/types/props";

// Icons
import { Expand, ShoppingCart } from "lucide-react";

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <article className="group bg-white cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images & Actions */}
      <figure className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 w-full px-6 transition">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </figure>
      {/* Description */}
      <div>
        <h6 className="font-semibold text-lg">{data.name}</h6>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between ">
        <Currency value={data.price} />
      </div>
    </article>
  );
};

export default ProductCard;

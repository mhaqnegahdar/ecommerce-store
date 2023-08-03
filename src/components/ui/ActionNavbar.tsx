"use client";

// Hooks / Packages
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectState } from "@/redux/cart/cartSlice";

// Components
import Button from "@/components/ui/Button";

// Icons
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const ActionNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { items } = useAppSelector(selectState);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center ms-auto">
      <Button
        onClick={() => router.push(`/cart`)}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ms-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  );
};

export default ActionNavbar;

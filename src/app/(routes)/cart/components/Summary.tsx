"use client";

// Hooks / Packages
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { emptyCart } from "@/redux/cart/cartSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

// Components
import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/Button";

// Types
import { SummaryProps } from "@/types/props";

const Summary = ({ items }: SummaryProps) => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  //
  useEffect(() => {
    // If Payment Success
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      dispatch(emptyCart());
    }

    // If Payment Failed
    if (searchParams.get("canceled")) {
      toast.error("Somthing went wrong");
    }
  }, [searchParams, dispatch]);

  // Actions
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map(item => item.id) }
    );

    window.location = response.data.url;
  };

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 slide-in-from-top-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        className="w-full mt-6"
        disabled={items.length == 0 ? true : false}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

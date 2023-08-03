"use client";

// Hooks / Props
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onClose, selectState } from "@/redux/modal/productModalSlice";

// Components
import Modal from "@/components/ui/Modal";
import Gallery from "@/components/layout/gallery";
import Info from "@/components/layout/Info";

const ProductModal = () => {
  const dispatch = useAppDispatch();

  const { isOpen, product } = useAppSelector(selectState);

  if (!product) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={() => dispatch(onClose())}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product?.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;

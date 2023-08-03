"use client";

// Hooks/ Packages
import { useState, useEffect } from "react";
import ProductModal from "@/components/layout/modals/ProductModal";

// Components

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ProductModal />
    </>
  );
};

export default ModalProvider;

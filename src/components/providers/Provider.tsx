"use client";

// Hooks/ Packages
import { useState, useEffect } from "react";

// Components
import Footer from "../layout/footer/Footer";

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
      <Footer />
    </>
  );
};

export default ModalProvider;

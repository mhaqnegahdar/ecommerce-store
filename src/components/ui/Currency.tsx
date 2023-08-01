"use client";

// Hooks / Packages
import { useState, useEffect } from "react";

// Types
import { CurrencyProps } from "@/types/props";

// Actions
import { currancyFormatter } from "@/lib/utils";

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <p className=" font-semibold">{currancyFormatter.format(Number(value))}</p>
  );
};

export default Currency;

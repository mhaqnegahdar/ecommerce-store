"use client";

// Components
import Button from "@/components/ui/Button";

// Icons
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const ActionNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center ms-auto">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ms-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default ActionNavbar;

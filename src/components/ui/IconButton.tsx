"use client";

// Hooks / Packages
import { cn } from "@/lib/utils";

// Types
import { IconButtonProps } from "@/types/props";

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;

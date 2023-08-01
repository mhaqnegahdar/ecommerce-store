"use client";

// Hooks / Components
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Types
import { NavBarProps } from "@/types/props";
import Link from "next/link";

const NavBar = ({ data }: NavBarProps) => {
  const pathname = usePathname();

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 space-x-4 lg:space-x-6 flex items-center">
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black ",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

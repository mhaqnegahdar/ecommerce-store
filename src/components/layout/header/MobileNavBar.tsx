"use client";

// Hooks / Packages
import * as React from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

// Components
import { ListItem } from "@/components/ui/ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Types
import { NavBarProps } from "@/types/props";

const MobileNavBar = ({ data }: NavBarProps) => {
  const pathname = usePathname();

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Mbiel Menu */}
        <NavigationMenuItem className="block lg:hidden">
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[300px]  gap-3 p-4 md:w-[500px] grid-cols-2 lg:w-[600px]  -left-1/2">
              {routes.map(route => (
                <ListItem
                  className=""
                  key={route.href}
                  title={route.label}
                  href={route.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MobileNavBar;

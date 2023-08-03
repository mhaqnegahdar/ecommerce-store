"use client";

// Hooks / Packages
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Types
import { NavBarProps } from "@/types/props";

const DesktopNavBar = ({ data }: NavBarProps) => {
  const pathname = usePathname();

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Deskop Menu */}
        {routes.map(({ href, label, active }) => (
          <NavigationMenuItem key={href} className="hidden lg:block">
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground",
                  navigationMenuTriggerStyle()
                )}
              >
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavBar;

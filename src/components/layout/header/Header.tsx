// Hooks / Packages
import React from "react";

// Components
import Container from "@/components/ui/Container";
import Link from "next/link";
import ActionNavbar from "@/components/ui/ActionNavbar";

// Actions
import getCategories from "@/actions/getCategories";
import DesktopNavBar from "@/components/layout/header/DesktopNavBar";
import MobileNavBar from "@/components/layout/header/MobileNavBar";

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <MobileNavBar data={categories} />

          <Link href={`/`} className="ms-4 lg:ms-0 flex gap-x-2">
            <p className="font-bold text-xl capitalize">store</p>
          </Link>
          {/* <NavBar data={categories} /> */}
          <DesktopNavBar data={categories} />
          <ActionNavbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;

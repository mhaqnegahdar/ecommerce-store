// Hooks / Packages
import React from "react";

// Components
import Container from "@/components/ui/Container";
import Link from "next/link";
import NavBar from "@/components/layout/header/NavBar";
import ActionNavbar from "@/components/ui/ActionNavbar";

// Actions
import getCategories from "@/actions/getCategories";

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={`/`} className="ms-4 lg:ms-0 flex gap-x-2">
            <p className="font-bold text-xl capitalize">store</p>
          </Link>
          <NavBar data={categories} />
          <ActionNavbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;

// Hooks / Packages
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="py-10 mx-auto">
        <p className="text-center text-sm text-black">
          &copy; {new Date().getFullYear()}{" "}
          <Link href={"https://github.com/maxjn"}>
            Mohamad Haqnegahdar (maxjn)
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

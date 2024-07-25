import Link from "next/link";
import React from "react";
import GemIcon from "./gem-icon";

const NavLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-1"
      prefetch={false}
    >
      <GemIcon className="h-6 w-6" />
      <span className="text-xl font-bold ">GabGenie</span>
    </Link>
  );
};

export default NavLogo;

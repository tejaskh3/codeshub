"use client";

import React from "react";
import Link from "next/link";
type NavBarProps = {};

const Navbar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:fx-12 fx-2 md:fx-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="Leetcode" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button className="bg-brand-orange px-1 py-2 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange transition duration-300 ease-in-out">
          Sign In
        </button>
        {/* <button>Login</button> */}
      </div>
    </div>
  );
};

export default Navbar;

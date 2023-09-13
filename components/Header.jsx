"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header({ navLinks }) {
  const pathname = usePathname(); // se captura el pathname para ubicarnos en que ruta se encuentra
  return (
    <div className="bg-teal-600 p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-white text-3xl font-bold">Pulse Post</h1>
      </Link>
      <nav className="space-x-5 mr-4">
        <Link
          href="/"
          className={
            pathname.includes("/posts") ? "text-white" : "text-gray-300"
          }
        >
          Inicio
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "text-white" : "text-gray-300"}
        >
          About
        </Link>
      </nav>
    </div>
  );
}

export default Header;

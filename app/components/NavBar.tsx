"use client";
import MenuOverlay from "@/app/components/MenuOverlay";
import NavLink from "@/app/components/NavLink";
import { navLinks } from "@/constants/data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="text-2xl lg:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((item) => (
              <li key={item.title}>
                <NavLink title={item.title} path={item.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}

export default NavBar;

"use client"

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Thirdheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="py-5 flex justify-between items-center px-5 sm:px-10 border-b-[1px] border-gray-300 relative z-10 bg-white">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-5 text-gray-700">
        <Link href="/" className="hover:text-cyan-700">Home</Link>
        <Link href="/cart" className="hover:text-cyan-700">Shop</Link>
        <Link href="/allproducts" className="hover:text-cyan-700">Product</Link>
        <Link href="/allproducts" className="hover:text-cyan-700">Pages</Link>
        <Link href="/about" className="hover:text-cyan-700">About</Link>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        {!isMenuOpen ? (
          <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={toggleMenu}/>
        ):null }
      </div>

       {/* Logo or Contact Info */}
       <span className="flex gap-2 items-center text-sm sm:text-base ">
        <a href="/contact" className="hover:text-cyan-700">Contact:</a>
        <a href="/contact" className="text-gray-500 hover:text-cyan-700">(808) 555-0111</a>
      </span>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white p-5 z-20 md:hidden shadow-lg">
          {/* Close Button */}
          <div className="flex justify-between items-center pb-5 ">
            <HiX className="text-3xl cursor-pointer text-gray-700" onClick={toggleMenu}
            />
          </div>

          <nav className="flex flex-col gap-5 mt-5 text-gray-700">
            <Link href="/" onClick={closeMenu} className="hover:text-cyan-700">Home</Link>
            <Link href="/cart" onClick={closeMenu} className="hover:text-cyan-700">Shop</Link>
            <Link href="/allproducts" onClick={closeMenu} className="hover:text-cyan-700">Product</Link>
            <Link href="/allproducts" onClick={closeMenu} className="hover:text-cyan-700">Pages</Link>
            <Link href="/about" onClick={closeMenu} className="hover:text-cyan-700">About</Link>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Thirdheader;

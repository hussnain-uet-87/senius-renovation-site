import React, { useState } from "react";
import logo from "../assets/logo.webp";
import LINKS from "../Constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Top Row: Logo + Hamburger */}
        <div className="flex w-full justify-between items-center">
          <div className="flex"> 
            <p width="150px" className="  md:text-3xl font-bold text-xl ">
              Senius
            </p>
            <p className="hidden lg:block md:text-xl mt-2">
              {" "}
              &nbsp;- Crafting Spaces That Inspire.{" "}
            </p>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-3-line"></i>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-end space-x-6 mt-4">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-neutral-50 py-4 space-y-2 mt-4 border-t">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
    </nav>
  );
};

export default Navbar;

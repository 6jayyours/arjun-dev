import React, { useState } from "react";
import logoImg from "../assets/arlogo.png";
import { LINKS } from "../data/links";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto bg-stone-950/70 p-3 md:p-4 md:rounded-xl backdrop-blur-md shadow-lg">
          {/* Logo */}
          <a href="#home" >
            <img src={logoImg} alt="AR Logo" className="w-8 h-auto md:w-12 md:h-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {LINKS.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-white text-sm md:text-base font-medium font-rubik-distressed hover:text-gray-300 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-7 h-7" />
            ) : (
              <RiMenu3Fill className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <nav className="md:hidden mt-2 p-4 bg-stone-950/70 rounded-lg backdrop-blur-md shadow-md">
            <div className="flex flex-col space-y-4">
              {LINKS.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={handleLinkClick}
                  className="text-white text-base font-medium hover:text-gray-300 transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

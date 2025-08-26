import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <img
            src="/images/logo-2.png"
            alt="Olis Foods Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium">
          {["Home", "About Us", "Products", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative text-gray-700 hover:text-[#CE0043] transition-colors
                  after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#CE0043] 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 px-4 lg:px-5 py-2 bg-gradient-to-r from-[#CE0043] to-[#ff5a7d] text-white rounded-full shadow-md shadow-[#ce004340] hover:scale-105 transition"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 p-6 text-base sm:text-lg font-medium bg-white/95 backdrop-blur-md shadow-lg">
          {["Home", "About Us", "Products", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-[#CE0043] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-2 text-center bg-gradient-to-r from-[#CE0043] to-[#ff5a7d] text-white rounded-full shadow-md shadow-[#ce004340] hover:scale-105 transition"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

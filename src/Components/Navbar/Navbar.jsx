import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const products = {
    Beverages: ["Oli's Litchi Drink"],
    Bakery: ["Olis Sweet Rusk", "Olis Family Rusk", "Olis Dry Cake"],
    Groceries: ["Olis Soya Chunks", "Puddles Noodles"],
    Confectionary: ["Olis Cup-E-Magic"],
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <a
          href="/"
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
          <li>
            <a
              href="/home"
              className="relative text-gray-700 hover:text-[#CE0043] transition-colors
                after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#CE0043] 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/aboutus"
              className="relative text-gray-700 hover:text-[#CE0043] transition-colors
                after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#CE0043] 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </a>
          </li>

          <li className="relative group">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#CE0043] transition-colors"
              style={{ cursor: "pointer" }}
            >
              Products <ChevronDown size={18} />
            </button>

            <div
              className="absolute left-0 mt-3 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 
               rounded-2xl min-w-[240px] overflow-hidden
               max-h-0 opacity-0 translate-y-2 transition-all duration-300 ease-out
               group-hover:max-h-[600px] group-hover:opacity-100 group-hover:translate-y-0"
            >
              <div className="p-5 grid gap-5">
                {Object.entries(products).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">
                      {category}
                    </p>
                    <ul className="space-y-1">
                      {items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={`/products/${item
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="block px-3 py-1.5 rounded-lg text-gray-600 hover:text-[#CE0043] hover:bg-[#CE0043]/10 text-sm transition"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          <li>
            <a
              href="/contact"
              className="relative text-gray-700 hover:text-[#CE0043] transition-colors
                after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#CE0043] 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="ml-3 px-4 lg:px-5 py-2 bg-gradient-to-r from-[#CE0043] to-[#ff5a7d] text-white rounded-full shadow-md shadow-[#ce004340] hover:scale-105 transition"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 p-6 text-base sm:text-lg font-medium bg-white/95 backdrop-blur-md shadow-lg">
          <li>
            <a
              href="/home"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#CE0043]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/aboutus"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#CE0043]"
            >
              About Us
            </a>
          </li>

          <li>
            <button
              className="flex items-center justify-between w-full text-gray-700 hover:text-[#CE0043]"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Products{" "}
              {mobileDropdown ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {mobileDropdown && (
              <div className="mt-3 ml-4 space-y-3">
                {Object.entries(products).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-semibold text-gray-900">{category}</p>
                    <ul className="ml-3 mt-1 space-y-1">
                      {items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={`/products/${item
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600 hover:text-[#CE0043] text-sm"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#CE0043]"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/contact"
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

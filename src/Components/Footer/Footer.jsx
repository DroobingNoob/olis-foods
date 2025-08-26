import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src="/images/logo-2.png"
            alt="Olis Foods Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Bringing you fresh, high-quality groceries, bakery, and beverages
            right at your doorstep. Taste the difference with Olis Foods.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#products" className="hover:text-[#CE0043] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#CE0043] transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#CE0043] transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#CE0043] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#CE0043]" />
              <span>AE 709, SECTOR-I, SALTLAKE, KOLKATA-700064</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#CE0043]" />
              <span>+91 8802670444, +917044020875</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#CE0043]" />
              <span>sikderinternational01@gmail.com, ask@olis.foods.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#CE0043] transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#CE0043] transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#CE0043] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Olis Foods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

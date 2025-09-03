import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Beverages", img: "/images/beverage.png" },
  { name: "Bakery", img: "/images/Bakery.png" },
  { name: "Grocery", img: "/images/groceries.png" },
  { name: "Confectionary", img: "/images/confectionary.png" },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 overflow-hidden"
    >
      <div className="absolute top-20 -left-32 w-72 h-72 bg-[#CE0043]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-72 h-72 bg-[#CE0043]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#CE0043] to-pink-600 bg-clip-text text-transparent">
          Discover Our Products
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our wide range of delicious offerings
        </p>
      </div>

      <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-100 
                       shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#CE0043]/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative flex flex-col items-center justify-center p-8">
              <div
                className="hidden md:flex w-48 h-48 lg:w-56 lg:h-56 items-center justify-center 
                              rounded-full bg-gradient-to-br from-gray-100 to-white shadow-inner 
                              group-hover:shadow-lg group-hover:shadow-pink-200/50 transition"
              >
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="w-40 h-40 object-contain"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 250 }}
                />
              </div>

              <motion.img
                src={cat.img}
                alt={cat.name}
                className="md:hidden w-28 h-28 sm:w-32 sm:h-32 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              />

              <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#CE0043] transition">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;

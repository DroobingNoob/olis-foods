import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 7, label: "Product Range" },
  { value: 1, label: "Popular Brand" },
  { value: 15, label: "Number of Distributors" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, idx) => {
        const increment = stat.value / 50;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(intervals[idx]);
          }
          setCounts((prev) => {
            const copy = [...prev];
            copy[idx] = Math.floor(current);
            return copy;
          });
        }, 20);
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-10 -left-20 w-64 h-64 bg-[#CE0043]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-64 h-64 bg-[#CE0043]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#CE0043] to-pink-500 bg-clip-text text-transparent">
          Our Reach
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Key numbers that define our business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl md:text-6xl font-extrabold text-[#CE0043]">
              {counts[idx]}
            </span>
            <span className="mt-3 text-lg font-medium text-gray-700">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

import React from "react";

const WelcomeSection = () => {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-white to-pink-100/40"></div>
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#CE0043] to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
        <img
          src="/images/confectionary.png"
          alt="Welcome to Olis Foods"
          className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#CE0043] to-pink-500 bg-clip-text text-transparent">
          Welcome to Olis Foods
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Welcome to <span className="font-semibold text-[#CE0043]">OLI’S</span>
          , your one-stop shop for{" "}
          <strong>beverages, bakery, groceries,</strong>
          and <strong>confectionery</strong>! We provide top-quality products at
          unbeatable prices. From refreshing soft drinks to freshly baked
          pastries, OLI’S is your trusted partner in delicious living.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#CE0043] to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
        >
          Read Our Story
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;

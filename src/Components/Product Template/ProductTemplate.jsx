import React from "react";
import "../CallToAction/CallToAction";
import ContactBanner from "../CallToAction/CallToAction";

const ProductTemplate = ({ title, description, image }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pt-25">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-2 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
            style={{ height: "500px", width: "1536px" }}
          />
        </div>

        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#CE0043] mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {description}
          </p>

          <ContactBanner />
          {/* <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#CE0043] to-[#ff5a7d] 
                       text-white font-semibold rounded-full shadow-md shadow-[#ce004340] 
                       hover:scale-105 transition"
          >
            Get in Touch
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProductTemplate;

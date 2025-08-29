import React from "react";
import { ArrowRight } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="py-12">
      <div className="max-w-xl mx-auto bg-gradient-to-r from-[#CE0043] to-[#9e0033] text-white rounded-2xl shadow-md py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-medium text-center md:text-left">
          Still have questions?{" "}
          <span className="font-semibold">We’re here to help.</span>
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#CE0043] font-semibold px-5 py-2.5 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform"
        >
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default ContactBanner;

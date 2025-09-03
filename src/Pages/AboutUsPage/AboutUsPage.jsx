import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-pink-50 min-h-screen">
      <section
        className="max-w-7xl mx-auto px-6 pt-25
       text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-[#CE0043]">OLI’S</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Delight Your Taste Buds and Satisfy Your Appetite. Find Beverages,
          Bakery, Groceries, and Confectionery from the Comfort of Your Home.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/a4-1536x1022.webp"
            alt="Fresh groceries"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Enriching Lives Through Simple Pleasures
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At OLI’s Brand, we believe that a person lives an enriched life when
            they can enjoy the simple pleasures of nature and its bounty.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            OLI’S is the one-stop shop for all of your grocery needs.
            Established in 2019, OLI’S makes it easy to enjoy fresh and healthy
            foods that fit your lifestyle.
            <br />
            <br />
            Our mission is to offer the freshest, tastiest, and most convenient
            selection of items in the market, which drives us to keep providing
            a wide variety of items to our customers every day.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/images/a3-1117x1536.webp"
            alt="Our story"
            className="rounded-2xl shadow-lg h-128 object-cover w-full"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/a5-1536x1022.webp"
            alt="Bakery and confectionery"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Crafted with Care
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our products are dedicated to providing customers with quality goods
            at affordable prices so that everyone can experience the joys of
            freshness and quality.
            <br />
            <br />
            From beverages and bakery items to groceries and confectionery,
            every product is crafted from natural ingredients chosen for their
            superior taste and appeal.
          </p>
        </div>
      </section>

      <section className="bg-[#CE0043] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">OLI’S Legacy</h2>
          <p className="text-lg leading-relaxed">
            We take great pride in OLI’S legacy of delightful treats that
            provide families with joyful moments throughout life’s special
            occasions – made even more enjoyable when shared with those you love
            most.
            <br />
            <br />
            Every bite brings pure delight thanks to our commitment to freshness
            and quality craftsmanship, from cakes to brunch specials.
            <br />
            <br />
            Explore what makes us distinctive among other brands: experience our
            passion firsthand!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sutonu Pal",
    product: "OLIS Family Rusk",
    review:
      "OLI’s Family Rusks are the best-tasting rusk I’ve ever had. The taste is so unique and enjoyable to me that these turn out to be my favourite, most memorable food items. My family and I have been enjoying OLI’S Sweet Rusk for a while now, and we absolutely love it. It’s a great addition to our family, and we all love the delightful taste. We highly recommend OLI’S Family Rusk to anyone looking for a delicious snack.",
    rating: 5,
  },
  {
    name: "SK Masud",
    product: "OLIS Sweet Rusk",
    review:
      "I recently tried OLI’s Sweet Rusk, and it was amazing. The rusk was crispy and light, and the flavour was just perfect. I can honestly say that it is the best rusk I have ever tasted. I am just fond of it because it is rich and flavorful. I highly recommend OLI’S Sweet Rusk to anyone looking for a tasty treat.",
    rating: 5,
  },
  {
    name: "Hemant Sengupta",
    product: "OLIS Soya Chunks",
    review:
      "I’m a vegetarian, and I’ve tried a lot of different soy substitutes, but none of them has ever been appealing to me. OLI’s Soy Chunks are sublime. They’re rich in protein and easy to make, and I can’t imagine anything better. I am really impressed by the quality of OLI’S Soya Chunks. They are delicious and definitely some of the best soy chunks I’ve ever had. I’m delighted I found this product and will definitely be buying it again.",
    rating: 5,
  },
  {
    name: "Chandan Sinha",
    product: "OLIS Litchi Drink",
    review:
      "Delicious! I am so hooked on OLI’s Litchi Drink. I’m usually not a fan of litchi drinks, but OLI’S has changed my mind. The perfect balance of sweet and tart flavours is impressive, and it’s such a refreshing way to treat myself. I definitely recommend it to anyone looking for a delicious and healthy treat.",
    rating: 5,
  },
  {
    name: "Rajib Pal",
    product: "OLIS Puddles Noodles",
    review:
      "I have had a few packages of puddles noodles. The noodles are great for breakfast with some eggs, veggies, and cheese. These noodles are the best. So light and fluffy, and they cook up perfectly every time. They always make me feel full and satisfied. Great for when you’re hungry.",
    rating: 5,
  },
  {
    name: "Motilal Mahato",
    product: "OLIS Dry Cake",
    review:
      "I absolutely love OLI’S Dry Cake. I was really surprised by how much I liked OLI’S Dry Cake. I expected it to be pretty dry, but it was actually really moist and flavorful. The texture is also perfect, and the flavour is incredible. It’s definitely my new go-to snack. I highly recommend it to anyone looking for a tasty snack.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#CE0043] to-pink-500 bg-clip-text text-transparent mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg">
          Honest reviews from people who love our products
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-10 flex flex-col items-center text-center"
              >
                <Quote className="w-10 h-10 text-[#CE0043] mb-4 opacity-70" />

                <p className="text-lg md:text-xl text-gray-700 italic">
                  “{t.review}”
                </p>

                <div className="flex justify-center mt-6 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {t.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    Reviewed: {t.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md p-2 hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md p-2 hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? "bg-[#CE0043] scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

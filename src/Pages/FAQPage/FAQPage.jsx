import React from "react";
import CallToAction from "../../Components/CallToAction/CallToAction";

const faqs = [
  {
    question:
      "What types of Beverages do the OLI’S offer, and are they all made with Natural Ingredients?",
    answer:
      "OLI’S offers Litchi Drink, Red Berry Litchi Drink, and Fruit Star Mango Drink, all of which are made from natural ingredients.",
  },
  {
    question: "Are the Groceries offered by OLI’S Locally Sourced and Organic?",
    answer:
      "Yes, the groceries offered by OLI’s are locally sourced and organic.",
  },
  {
    question:
      "Does OLI’S offer any Sugar-free or Low-calorie Options in its Confectionery Products?",
    answer:
      "Yes, OLI’S offers sugar-free and low-calorie options in its confectionery products.",
  },
  {
    question:
      "How does OLI’S ensure the Quality and Freshness of the Products?",
    answer:
      "OLI’S ensures the quality and freshness of its products through various measures, including sourcing ingredients from reputable and reliable suppliers, conducting rigorous quality checks at every stage of production, maintaining strict hygiene and sanitation standards in its facilities, and using advanced packaging techniques to preserve the freshness of its products during transportation and storage.",
  },
  {
    question:
      "What Sets OLI’S apart from other Brands offering Similar Products in the Market?",
    answer:
      "Firstly, OLI’S carefully selects each ingredient used in their recipes regardless of its organic nature. Unlike most popular brands, which often overlook this factor – OLI’S takes precautions by evaluating each ingredient before adding them to the mix. They also keep track of sourcing for transparency and ethical practices. Moreover, OLI’S ensures consumers get the best available while maintaining a consistent flavour profile across their wide product range. With such a strong commitment to quality assurance, OLI’S stands out as one of the best brands in the market today.",
  },
];

const FAQPage = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-pink-50 pt-25 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
          Frequently Asked <span className="text-[#CE0043]">Questions</span>
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 border-l-4 border-[#CE0043]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start gap-3">
                <span className="text-[#CE0043] font-bold text-2xl">
                  {index + 1}.
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default FAQPage;

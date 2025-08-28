import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-pink-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">
            Get in <span className="text-[#CE0043]">Touch</span>
          </h2>
          <p className="text-gray-600 mb-10">
            We’d love to hear from you. Reach out through any of the details
            below, or simply drop us a message using the form.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-[#CE0043]" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">sikderinternational01@gmail.com</p>
                <p className="text-gray-600">ask@olis.foods.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[#CE0043]" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+91 8802670444</p>
                <p className="text-gray-600">+91 7044020875</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#CE0043]" />
              <div>
                <h4 className="font-semibold">Corporate Office</h4>
                <p className="text-gray-600">
                  AE 709, SECTOR-I, SALTLAKE, KOLKATA-700064
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#CE0043]" />
              <div>
                <h4 className="font-semibold">Branch Office & Factory</h4>
                <p className="text-gray-600">
                  50/A/1 Nadibhag, Digberia 2nd Lane, Badu Road, Madhyamgram,
                  North 24 PGS, Westbengal, PIN-700128
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href="#"
              className="text-gray-500 hover:text-[#CE0043] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#CE0043] transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#CE0043] transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-64">
            <iframe
              title="Olis Foods Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.727063121546!2d88.4261!3d22.5898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275dcb1d94bbd%3A0x59fa92b4f0e9a4f0!2sSaltlake%20Sector%20I%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div> */}
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#CE0043] focus:ring focus:ring-pink-100 outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#CE0043] focus:ring focus:ring-pink-100 outline-none transition"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#CE0043] focus:ring focus:ring-pink-100 outline-none transition resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#CE0043] to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-64">
        <iframe
          title="Olis Foods Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.727063121546!2d88.4261!3d22.5898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275dcb1d94bbd%3A0x59fa92b4f0e9a4f0!2sSaltlake%20Sector%20I%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690000000000"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;

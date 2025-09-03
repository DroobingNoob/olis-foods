import React, { useState } from "react";

const CareerPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (mobile) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  const isEmailValid = validateEmail(email);
  const isMobileValid = validateMobile(mobile);

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    address.trim() &&
    qualification.trim() &&
    isEmailValid &&
    isMobileValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const formData = {
      firstName,
      lastName,
      mobile,
      email,
      address,
      qualification,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 pt-25 bg-gradient-to-br from-[#fff0f5] via-white to-[#fbe5ec]">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm">
            Start Your <span className="text-[#CE0043]">Career</span> with Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill in the details below to apply for a position at{" "}
            <span className="font-semibold text-[#CE0043]">OLI’S</span>.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-10 space-y-8 border border-white/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043] outline-none transition-all bg-white/90"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043] outline-none transition-all bg-white/90"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile No *
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className={`w-full px-4 py-3 border rounded-xl shadow-sm outline-none transition-all bg-white/90 ${
                mobile && !isMobileValid
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043]"
              }`}
            />
            {mobile && !isMobileValid && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid 10-digit mobile number.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-3 border rounded-xl shadow-sm outline-none transition-all bg-white/90 ${
                email && !isEmailValid
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043]"
              }`}
            />
            {email && !isEmailValid && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043] outline-none transition-all bg-white/90"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qualification *
            </label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-[#CE0043] focus:border-[#CE0043] outline-none transition-all bg-white/90"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all
                ${
                  isFormValid
                    ? "bg-gradient-to-r from-[#CE0043] to-[#a60035] text-white hover:shadow-xl hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;

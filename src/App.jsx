import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FAQPage from "./Pages/FAQPage/FAQPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import CareerPage from "./Pages/CareerPage/CareerPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ProductPage from "./Pages/Product Page/ProductPage";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

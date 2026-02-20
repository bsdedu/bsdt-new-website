import React, { useEffect } from "react";
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div>
          <h1 className="text-3xl font-bold text-bsd-gray mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            We'd love to hear from you! Whether you have questions about our programs, admissions, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can also reach us directly via phone or email:
          </p>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <strong>Phone:</strong> +91 9620204693 | +91 9845779000
            </li>
            <li className="text-gray-700">
              <strong>Email:</strong> enquiry@bsd.edu.in | admissions@bsd.edu.in
            </li>
            <li className="text-gray-700">
              <strong>Address:</strong> 186, K Narayanapura Main Rd, BDS Nagar, Narayanapura, Bengaluru, Karnataka 560077
            </li>
          </ul>
        </div>

        {/* Right Column: NoPaperForms Widget */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl text-center font-semibold text-bsd-gray mb-4">Get in Touch</h2>
          <div
            className="npf_wgts"
            data-height="400px"
            data-w="14fe90258f1849328c9ebb3adc9782bb"
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

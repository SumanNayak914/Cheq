import React from "react";

const SecureSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 bg-[radial-gradient(#f2f2f2_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-green-500 font-bold">100% secure</span>{" "}
          <span className="text-black">and encrypted</span>
        </h2>

        {/* Lock Icon */}
        <div className="bg-gradient-to-br from-green-100 to-white p-6 rounded-full border-2 border-green-300 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m0-6a2 2 0 00-2 2v4a2 2 0 002 2h0a2 2 0 002-2v-4a2 2 0 00-2-2zm0 0V9a4 4 0 118 0v2"
            />
          </svg>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-green-300 max-w-[600px]"></div>

        {/* Partners Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-6">

          {/* Security Partners */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm text-gray-600 uppercase font-medium">Security Partners</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <img
                src="/pci-logo.png"
                alt="PCI DSS"
                className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border"
              />
              <img
                src="/iso-logo.png"
                alt="ISO"
                className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border"
              />
            </div>
          </div>

          {/* Bank Partners */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="text-sm text-gray-600 uppercase font-medium">Bank Partners</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <img
                src="/axis-bank-logo.png"
                alt="Axis Bank"
                className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border"
              />
              <img
                src="/icici-logo.png"
                alt="ICICI Bank"
                className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border"
              />
            </div>
          </div>
        </div>

        {/* Lending Services Text */}
        <h3 className="pt-14 text-2xl md:text-3xl font-bold">
          <span className="text-green-600">Lending</span> services via
        </h3>
      </div>
    </section>
  );
};

export default SecureSection;

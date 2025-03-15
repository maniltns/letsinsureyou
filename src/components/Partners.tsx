import React from 'react';

const Partners = () => {
  const insurers = [
    {
      name: "HDFC ERGO",
      logo: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFC_logo.svg"
    },
    {
      name: "ICIC Lomboad",
      logo: "data:image/png;base64,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"
    },
    {
      name: "Star Health Insurance",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jBP-I3-tkKnLEeHBaDPpdFRz880oRaTiDA&s"
    },
    {
      name: "Royal Sunderem General Insurance",
      logo: "https://www.royalsundaram.in/assets/images/rs-new-logo.png"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Insurance Partners
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We work with the most trusted names in insurance
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {insurers.map((insurer) => (
              <div key={insurer.name} className="col-span-1 flex justify-center items-center">
                <div className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  <img
                    className="h-12 object-contain"
                    src={insurer.logo}
                    alt={`${insurer.name} logo`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            As a multi-branded insurance agency, we represent multiple insurance companies to provide you with the best coverage options at competitive rates.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Multiple Options</h3>
              <p className="mt-2 text-blue-600">Compare policies from different insurers</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Best Rates</h3>
              <p className="mt-2 text-blue-600">Competitive pricing from top providers</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Expert Advice</h3>
              <p className="mt-2 text-blue-600">Personalized guidance for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
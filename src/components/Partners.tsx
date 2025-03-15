import React from 'react';

const Partners = () => {
  const insurers = [
    {
      name: "HDFC ERGO",
      logo: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFC_logo.svg"
    },
    {
      name: "AXA",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=200&h=100"
    },
    {
      name: "Zurich",
      logo: "https://images.unsplash.com/photo-1614680376593-d3a7f0994583?auto=format&fit=crop&q=80&w=200&h=100"
    },
    {
      name: "Prudential",
      logo: "https://images.unsplash.com/photo-1614680376683-b4c5c2c74d17?auto=format&fit=crop&q=80&w=200&h=100"
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
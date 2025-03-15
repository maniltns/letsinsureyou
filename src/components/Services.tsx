import React from 'react';
import { Shield, Building2, Camera, Code2, Brain, Car, Heart, Home } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Multi-Branded Insurance',
    description: 'Comprehensive insurance solutions from top providers for all your coverage needs.',
    type: 'insurance',
    products: ['Auto', 'Home', 'Life', 'Business']
  },
  {
    icon: Building2,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business operations and digital transformation.',
    type: 'consulting'
  },
  {
    icon: Camera,
    title: 'CCTV Solutions',
    description: 'Professional CCTV installation, maintenance, and monitoring services for your security needs.',
    type: 'security'
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your specific business requirements and goals.',
    type: 'development'
  },
  {
    icon: Brain,
    title: 'AI Workflow Solutions',
    description: 'Intelligent automation and AI-powered workflow management to streamline your operations.',
    type: 'ai'
  }
];

const insuranceProducts = [
  {
    icon: Car,
    title: 'Auto Insurance',
    fields: ['Vehicle Number', 'Previous Policy Copy', 'NCB Declaration', 'Vehicle Type']
  },
  {
    icon: Home,
    title: 'Home Insurance',
    fields: ['Property Address', 'Property Type', 'Built-up Area', 'Year of Construction']
  },
  {
    icon: Shield,
    title: 'Business Insurance',
    fields: ['Business Type', 'Annual Turnover', 'Number of Employees', 'Coverage Type']
  },
  {
    icon: Heart,
    title: 'Life Insurance',
    fields: ['Date of Birth', 'Coverage Amount', 'Policy Term', 'Medical History']
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);

  const handleGetQuote = (service) => {
    setSelectedService(service);
    if (service.type === 'insurance') {
      setShowQuoteForm(true);
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive business solutions for modern enterprises
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => handleGetQuote(service)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showQuoteForm && (
          <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Insurance Product</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {insuranceProducts.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProduct(product)}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedProduct === product
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <product.icon className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-medium text-gray-900">{product.title}</h4>
                  </div>
                ))}
              </div>

              {selectedProduct && (
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {selectedProduct.fields.map((field, index) => (
                      <div key={index}>
                        <label htmlFor={field.toLowerCase().replace(/\s+/g, '-')} className="block text-sm font-medium text-gray-700">
                          {field}
                        </label>
                        <input
                          type="text"
                          id={field.toLowerCase().replace(/\s+/g, '-')}
                          name={field.toLowerCase().replace(/\s+/g, '-')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
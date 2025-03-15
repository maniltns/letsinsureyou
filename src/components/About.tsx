import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Our Company
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We are a leading provider of comprehensive business solutions, combining expertise in insurance, IT consulting, software development, and AI integration. Our mission is to help businesses thrive in the digital age through innovative solutions and strategic partnerships.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">10+ Years</h3>
                <p className="mt-1 text-gray-500">Industry Experience</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">500+</h3>
                <p className="mt-1 text-gray-500">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">24/7</h3>
                <p className="mt-1 text-gray-500">Customer Support</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Global</h3>
                <p className="mt-1 text-gray-500">Service Coverage</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Check, Clock, Users, Plane } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'European Explorer',
    duration: '14 Days',
    groupSize: '12-16 People',
    price: 2899,
    originalPrice: 3299,
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the highlights of Europe with visits to Paris, Rome, Barcelona, and Amsterdam.',
    includes: [
      'Round-trip flights',
      '4-star hotel accommodations',
      'Daily breakfast and 8 dinners',
      'Professional tour guide',
      'All entrance fees',
      'Airport transfers'
    ],
    popular: true
  },
  {
    id: 2,
    title: 'Asian Adventure',
    duration: '10 Days',
    groupSize: '8-12 People',
    price: 2199,
    originalPrice: 2599,
    image: 'https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the vibrant cultures of Thailand, Vietnam, and Cambodia.',
    includes: [
      'International flights',
      'Boutique hotel stays',
      'All meals included',
      'Cultural experiences',
      'Temple visits',
      'Cooking classes'
    ],
    popular: false
  },
  {
    id: 3,
    title: 'African Safari',
    duration: '12 Days',
    groupSize: '6-10 People',
    price: 3999,
    originalPrice: 4499,
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Witness the Big Five in their natural habitat across Kenya and Tanzania.',
    includes: [
      'Charter flights',
      'Luxury safari lodges',
      'All meals and drinks',
      'Professional safari guide',
      'Game drives',
      'Cultural village visits'
    ],
    popular: false
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted travel packages designed to give you 
            the perfect balance of adventure, culture, and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-orange-400' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {pkg.groupSize}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Plane className="h-5 w-5 mr-2 text-sky-500" />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-sky-600">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 line-through ml-2">
                        ${pkg.originalPrice.toLocaleString()}
                      </span>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Save ${pkg.originalPrice - pkg.price}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-xl hover:from-sky-600 hover:to-orange-600 transition-all duration-200 font-semibold">
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
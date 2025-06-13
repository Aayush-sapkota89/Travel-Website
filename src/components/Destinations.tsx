import React from 'react';
import { Star, MapPin, Camera } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 1234,
    price: 899,
    description: 'Experience the magical sunsets and whitewashed architecture of this iconic Greek island.',
    features: ['Sunset Views', 'Wine Tasting', 'Beach Access']
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 987,
    price: 699,
    description: 'Discover tropical paradise with ancient temples, lush rice terraces, and pristine beaches.',
    features: ['Temple Tours', 'Spa Retreats', 'Adventure Sports']
  },
  {
    id: 3,
    name: 'Kyoto, Japan',
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 1567,
    price: 1299,
    description: 'Immerse yourself in traditional Japanese culture with historic temples and zen gardens.',
    features: ['Cultural Tours', 'Tea Ceremonies', 'Cherry Blossoms']
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 2156,
    price: 1599,
    description: 'Explore the ancient Incan citadel perched high in the Andes Mountains.',
    features: ['Hiking Trails', 'Archaeological Sites', 'Mountain Views']
  },
  {
    id: 5,
    name: 'Swiss Alps, Switzerland',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 892,
    price: 1899,
    description: 'Experience breathtaking alpine scenery and world-class skiing in the heart of Europe.',
    features: ['Skiing', 'Mountain Railways', 'Luxury Lodges']
  },
  {
    id: 6,
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 1345,
    price: 2299,
    description: 'Indulge in ultimate luxury with overwater bungalows and crystal-clear turquoise waters.',
    features: ['Overwater Villas', 'Diving', 'Spa Treatments']
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked collection of extraordinary destinations that promise 
            unforgettable experiences and lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Camera className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">
                    ${destination.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 text-sky-500 mr-2" />
                    {destination.name}
                  </h3>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(destination.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {destination.rating} ({destination.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {destination.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-xl hover:from-sky-600 hover:to-orange-600 transition-all duration-200 font-semibold">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
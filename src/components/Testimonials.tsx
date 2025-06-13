import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Wanderlust made our European adventure absolutely perfect! Every detail was thoughtfully planned, and our guide was incredibly knowledgeable. The memories we made will last a lifetime.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    trip: 'European Explorer Package'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'The Asian Adventure tour exceeded all expectations. From the bustling markets of Bangkok to the serene temples of Kyoto, every moment was magical. Highly recommend!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    trip: 'Asian Adventure Package'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'The African Safari was the trip of a lifetime! Seeing the Big Five in their natural habitat was breathtaking. The accommodations were luxurious and the guides were fantastic.',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
    trip: 'African Safari Package'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their adventures with Wanderlust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-sky-500 mb-4" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-sky-600 font-medium">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">15</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
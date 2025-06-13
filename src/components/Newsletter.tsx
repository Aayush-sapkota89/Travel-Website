import React, { useState } from 'react';
import { Mail, Send, Plane } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <Plane className="h-16 w-16 text-white mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive deals, 
            new destinations, and travel tips from our experts.
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white py-4 px-6 rounded-xl font-semibold text-lg">
              🎉 Thank you for subscribing! Check your email for exclusive offers.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </form>
          )}

          <div className="mt-8 text-white/80 text-sm">
            <p>🔒 We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
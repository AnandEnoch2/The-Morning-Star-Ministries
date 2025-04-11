import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  // Core testimonials that appear on both Home and Testimonials pages
  const coreTestimonials = [
    {
      name: "Raja",
      role: "Evangelist",
      image: "/assets/images/raja.jpg",
      quote: "Finding Morning Star Ministries has been a true blessing. The community here is incredibly welcoming and has helped me grow in my faith journey.",
      rating: 5
    },
    {
      name: "Thamarai",
      role: "Bible Study Participant",
      image: "/assets/images/thamarai.jpg",
      quote: "The youth program here is amazing! I've made lifelong friends and learned so much about God's love.",
      rating: 5
    },
    {
      name: "Zarah",
      role: "Bible Study Participant",
      image: "/assets/images/zarah.jpg",
      quote: "Serving at Morning Star has given me purpose and joy. The leadership team is supportive and truly cares about each person.",
      rating: 5
    },
    {
      name: "Nehemiah",
      role: "Youth Group Member",
      image: "/assets/images/nehemiah.jpg",
      quote: "The biblical teaching here is profound yet accessible. I've grown so much in my understanding of God's Word.",
      rating: 5
    },
    {
      name: "Anand",
      role: "Youth Group Member",
      image: "/assets/images/anand.jpg",
      quote: "The worship here touches my heart every time. It's a place where you can truly feel God's presence.",
      rating: 5
    }
  ];
  

  const allTestimonials = [...coreTestimonials];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511649475669-e288648b2339"
            alt="Testimonials Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">Hear from our community members about their experiences at Morning Star Ministries</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-navy-500">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-navy-200 transform -scale-x-100" />
                  <p className="text-gray-600 italic pl-6">{testimonial.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
}
import React from 'react';
import { Users, Heart, BookOpen, Star, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3"
            alt="Church interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Morning Star Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">Guiding souls towards Christ's light since 2019</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">Morning Star Ministries began with a small group of devoted believers gathering in a living room. Today, we've grown into a vibrant community of faith, serving thousands across our city and beyond.</p>
              <p className="text-gray-600">Our journey has been marked by God's faithfulness and the unwavering commitment of our congregation to spread His love and message.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/aboutus.jpeg"
                alt="Church History"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-500 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Love", description: "Demonstrating Christ's love in all we do" },
              { icon: Users, title: "Community", description: "Building strong, supportive relationships" },
              { icon: Star, title: "Excellence", description: "Pursuing excellence in service to God" },
              { icon: BookOpen, title: "Scripture", description: "Grounding everything in God's Word" },
              { icon: Award, title: "Integrity", description: "Living with honesty and transparency" },
              { icon: Target, title: "Purpose", description: "Helping each person find their calling" }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <value.icon size={40} className="text-navy-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-500 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-500 text-center mb-12">Our Leadership Team</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
              {[
                {
                  name: "Vaigesh",
                  role: "Evangelist",
                  image: "/assets/images/vvaigesh.jpeg",
                  bio: "Leading our congregation with wisdom and compassion for over 6 years."
                },
                {
                  name: "Newshika",
                  role: "Evangelist",
                  image: "/assets/images/newshika.jpeg",
                  bio: "Bringing hearts closer to God through music and praise."
                }
              ].map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full shadow-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-500 mb-2">{leader.name}</h3>
                  <p className="text-navy-400 text-lg mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
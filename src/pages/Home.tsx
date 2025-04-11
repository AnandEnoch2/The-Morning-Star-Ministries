import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Users, Heart, BookOpen, Star, Award, Target, Phone, Mail, Clock, QrCode, Quote, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const backgroundImages = [
    {
      src: "/assets/images/home 1.jpg",
      caption: "Vaigesh",
      position: "Evangelist"
    },
    {
      src: "/assets/images/home 2.jpg",
      caption: "Newshika",
      position: "Evangelist"
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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

  const TestimonialSection = () => (
    <section className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy-500 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600">Hear from our members about their experiences</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {coreTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover animate-pulse-subtle"
                />
                <div>
                  <h3 className="font-semibold text-navy-500">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4 animate-shimmer">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-navy-200 transform -scale-x-100 animate-pulse-subtle" />
                <p className="text-gray-600 italic pl-6">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/testimonials" 
            className="inline-flex items-center text-navy-500 hover:text-navy-700 font-medium group"
          >
            View All Testimonials
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover animate-scale-up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-40">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="space-y-4 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl text-white font-bold mb-2 animate-glow">
                      {image.caption}
                    </h2>
                    {image.position && (
                      <p className="text-2xl text-white/90 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {image.position}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Action Buttons */}
        <div className="absolute bottom-20 left-0 right-0 z-10">
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-white text-navy-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 transform animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Learn More <ArrowRight className="ml-2 animate-bounce-subtle" size={20} />
            </Link>
            <Link 
              to="/prayer-request" 
              className="inline-flex items-center justify-center bg-navy-600 text-white px-8 py-3 rounded-full font-medium hover:bg-navy-700 transition-all hover:scale-105 transform animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Prayer Request <Heart className="ml-2 animate-pulse-subtle" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Clock, 
                title: "Service Times", 
                text: "Saturday 6 PM",
                className: "bg-gray-50"
              },
              { 
                icon: Video, 
                title: "Join Online", 
                text: "meet.google.com/tjm-ewaj-kuo",
                link: "https://meet.google.com/tjm-ewaj-kuo",
                isLink: true,
                className: "bg-navy-500 text-white"
              },
              { 
                icon: Phone, 
                title: "Phone", 
                text: "+91 8903365792",
                className: "bg-gray-50"
              },
              { 
                icon: Mail, 
                title: "Email", 
                text: "themorningstarministry@gmail.com",
                className: "bg-gray-50"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center h-16 space-x-4 px-5 rounded-lg shadow-md hover:shadow-lg transition-all ${item.className} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon size={24} className={`${item.isLink ? 'text-white' : 'text-navy-500'} flex-shrink-0 animate-pulse-subtle`} />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold ${item.isLink ? 'text-white' : 'text-navy-500'}`}>
                    {item.title}
                  </h3>
                  {item.isLink ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/90 hover:text-white text-xs truncate block"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-xs truncate">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">We are dedicated to spreading God's love and light through worship, community service, and spiritual guidance. Join us in our journey of faith and discovery.</p>
              <div className="space-y-4">
                {[
                  { icon: Heart, text: "Spreading God's Love" },
                  { icon: Users, text: "Building Community" },
                  { icon: BookOpen, text: "Biblical Teaching" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 text-navy-500 animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon size={20} className="animate-pulse-subtle" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/about" 
                className="inline-block mt-8 text-navy-500 font-medium hover:text-navy-700 transition-colors group"
              >
                Read More 
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <img
                src="/assets/images/aboutus.jpeg"
                alt="Church Service"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-500 mb-4 animate-fade-in-up">Our Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Join us in worship, learning, and community service as we grow together in faith.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Saturday Worship",
                description: "Experience inspiring worship and fellowship every Saturday On Google Meet.",
                image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3",
                icon: Calendar
              },
              {
                title: "Bible Study",
                description: "Deepen your understanding of God's word through our weekly studies.",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65",
                icon: BookOpen
              },
              {
                title: "Community Outreach",
                description: "Serve our community through various outreach programs.",
                image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
                icon: Users
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-navy-500/20 group-hover:bg-navy-500/0 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <service.icon size={24} className="text-navy-500 mb-4 animate-bounce-subtle" />
                  <h3 className="text-xl font-bold text-navy-500 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy-600 to-navy-800 text-white text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 animate-glow">Join Our Community</h2>
          <p className="text-xl mb-8">Be part of our growing family and experience the love of Christ.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-navy-500 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 transform animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Get in Touch
            </Link>
            <Link 
              to="/prayer-request" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Submit Prayer Request
            </Link>
          </div>
        </div>
      </section>

      {/* Support Our Ministry Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Support Our Ministry</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your generous donations help us continue our mission of spreading God's love and serving our community.</p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <img
                  src="/assets/images/qr.jpg"
                  alt="QR Code for Donation"
                  className="w-64 h-64 mx-auto mb-8 rounded-lg animate-pulse-subtle"
                />
                <div className="space-y-2">
                  <p className="text-gray-600">Scan QR code or use UPI ID:</p>
                  <p className="text-2xl font-medium text-navy-500 animate-glow">vaigeshv-4@okicici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

export default function SocialMedia() {
  const socialChannels = [
    {
      platform: "Instagram",
      title: "Main Ministry Account",
      handle: "@themorningstarministry",
      url: "https://www.instagram.com/themorningstarministry?igsh=bnZ2cWpkcWZ5dmMy",
      description: "Follow our main Instagram account for daily devotionals, event highlights, and ministry moments",
      icon: Instagram,
      className: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      platform: "Instagram",
      title: "Secondary Ministry Account",
      handle: "@god_of_many_breasts",
      url: "https://www.instagram.com/god_of_many_breasts?igsh=MXRhdDdtZWMybmdtOA==",
      description: "Follow our secondary Instagram account for additional ministry content and updates",
      icon: Instagram,
      className: "bg-gradient-to-r from-pink-500 to-orange-500"
    },
    {
      platform: "YouTube",
      title: "Ministry YouTube Channel",
      handle: "@themorningstarministry",
      url: "https://youtube.com/@themorningstarministry?si=4tXUNfcdRemXFknS",
      description: "Subscribe to our YouTube channel for sermons, worship sessions, and special events",
      icon: Youtube,
      className: "bg-gradient-to-r from-red-600 to-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
            alt="Social Media Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay connected with our ministry through our social media channels</p>
        </div>
      </section>

      {/* Social Media Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`${channel.className} p-6 text-white`}>
                  <channel.icon size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{channel.title}</h3>
                  <p className="text-white/90">{channel.handle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-navy-500 text-white px-6 py-2 rounded-full hover:bg-navy-600 transition-colors w-full text-center"
                  >
                    Follow on {channel.platform}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-500 mb-4">Join Our Online Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on our social media channels to stay updated with our latest events, 
            teachings, and inspirational content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/themorningstarministry?igsh=bnZ2cWpkcWZ5dmMy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span>Main Instagram</span>
            </a>
            <a
              href="https://www.instagram.com/god_of_many_breasts?igsh=MXRhdDdtZWMybmdtOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span>Secondary Instagram</span>
            </a>
            <a
              href="https://youtube.com/@themorningstarministry?si=4tXUNfcdRemXFknS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
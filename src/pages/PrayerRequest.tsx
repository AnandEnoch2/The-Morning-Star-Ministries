import React, { useState } from 'react';
import { Heart, Shield } from 'lucide-react';

export default function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    prayerRequest: '',
    isConfidential: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*New Prayer Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRequest Type: ${formData.requestType}\nConfidential: ${formData.isConfidential ? 'Yes' : 'No'}\n\nPrayer Request: ${formData.prayerRequest}`;
    
    const whatsappUrl = `https://wa.me/918903365792?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
            alt="Prayer Request Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Prayer Request</h1>
          <p className="text-xl max-w-3xl mx-auto">Share your prayer needs with our prayer team. We believe in the power of prayer.</p>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <Heart className="w-12 h-12 text-navy-500" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"
                />
              </div>
              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Prayer Request
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"
                  required
                >
                  <option value="">Select a type</option>
                  <option value="healing">Physical Healing</option>
                  <option value="spiritual">Spiritual Growth</option>
                  <option value="family">Family</option>
                  <option value="financial">Financial</option>
                  <option value="guidance">Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="prayerRequest" className="block text-sm font-medium text-gray-700 mb-1">
                  Prayer Request
                </label>
                <textarea
                  id="prayerRequest"
                  name="prayerRequest"
                  value={formData.prayerRequest}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"
                  required
                ></textarea>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isConfidential"
                  name="isConfidential"
                  checked={formData.isConfidential}
                  onChange={handleChange}
                  className="h-4 w-4 text-navy-500 focus:ring-navy-500 border-gray-300 rounded"
                />
                <label htmlFor="isConfidential" className="text-sm text-gray-700 flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Keep this request confidential
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-navy-500 text-white py-3 px-6 rounded-md hover:bg-navy-600 transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Send Prayer Request via WhatsApp
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-navy-500 mb-4">Our Prayer Ministry</h2>
            <p className="text-gray-600 mb-6">
              Our dedicated prayer team commits to praying for each request received. We believe in the power of prayer and stand together in faith.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-navy-500 mb-2">Prayer Times</h3>
                <p className="text-gray-600">
                  Wednesday Prayer Meeting: 7:00 PM<br />
                  Sunday Prayer: 8:30 AM
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-navy-500 mb-2">Emergency Prayer</h3>
                <p className="text-gray-600">
                  For urgent prayer needs,<br />
                  call: +91 8903365792
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
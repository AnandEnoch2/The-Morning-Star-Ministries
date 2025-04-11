import React from 'react';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
            alt="Donation Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Support Our Ministry</h1>
          <p className="text-xl max-w-3xl mx-auto">Your generous donations help us continue our mission of spreading God's love and serving our community.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-navy-500 mb-8 text-center">Make a Donation</h2>
            <div className="text-center">
              <img
                src="/assets/images/qr.jpg"
                alt="QR Code for Donation"
                className="w-64 h-64 mx-auto mb-8 rounded-lg"
              />
              <div className="space-y-2">
                <p className="text-gray-600">Scan QR code or use UPI ID:</p>
                <p className="text-2xl font-medium text-navy-500">vaigeshv-4@okicici</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
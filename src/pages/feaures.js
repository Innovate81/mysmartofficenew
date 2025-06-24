import React from 'react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Smarter Support, Without the Overhead
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          My Smart Office gives your business a virtual PA that never calls in sick and always sounds professional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Call Handling */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">📞 Professional Call Handling</h2>
            <p className="text-gray-700">
              We answer your calls in your business name with a friendly, UK-based receptionist — no robots, no scripts (unless you want one).
            </p>
          </div>

          {/* Appointment Booking */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">📅 Appointment Booking</h2>
            <p className="text-gray-700">
              Integrated with your calendar so clients can book time with you without the back-and-forth emails.
            </p>
          </div>

          {/* Smart Call Scripts */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">🧠 Smart Call Scripts</h2>
            <p className="text-gray-700">
              Customisable call flows for different types of callers — sales, customers, VIPs — handled your way.
            </p>
          </div>

          {/* VIP Caller Recognition */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-2">⭐ VIP Caller Recognition</h2>
            <p className="text-gray-700">
              Repeat callers are recognised and routed or prioritised, with context for a seamless experience.
            </p>
          </div>

          {/* CRM Integration */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-red-700 mb-2">🔁 CRM + Calendar Integration</h2>
            <p className="text-gray-700">
              Plug in Outlook, Teams, Google — we work how you work.
            </p>
          </div>

          {/* Live Chat */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">💬 Live Chat (Coming Soon)</h2>
            <p className="text-gray-700">
              A smart, friendly chat agent on your site 24/7 to convert visitors into customers — powered by AI.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-4">Want to see how it works?</p>
          <a href="/contact" className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition">
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  );
}

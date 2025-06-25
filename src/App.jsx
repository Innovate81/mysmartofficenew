import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-olive-700 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Smart Office</h1>
          <nav className="space-x-4 text-sm hidden md:block">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Office, Smarter and Simplified</h2>
          <p className="text-lg text-gray-700 mb-6">Professional phone answering, appointment booking & live chat support tailored to your business.</p>
          <a href="#" className="bg-olive-700 text-white px-6 py-3 rounded hover:bg-olive-800 font-semibold">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded shadow text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" alt="Call Handling" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Call Handling</h4>
              <p className="text-gray-600 text-sm">We professionally answer calls in your business name, take messages, or transfer calls as needed.</p>
            </div>
            <div className="p-6 border rounded shadow text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="Appointment Booking" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Appointment Booking</h4>
              <p className="text-gray-600 text-sm">We manage your calendar, book client appointments, and send reminders via email or SMS.</p>
            </div>
            <div className="p-6 border rounded shadow text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3208/3208707.png" alt="Live Chat" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Live Chat Support</h4>
              <p className="text-gray-600 text-sm">Our trained agents handle your website’s live chat, helping turn visitors into customers 24/7.</p>
            </div>
            <div className="p-6 border rounded shadow text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="Business Support" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Business Support</h4>
              <p className="text-gray-600 text-sm">From inbox management to customer responses, we help your business run smoother every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">Why Businesses Choose Us</h3>
          <p className="text-gray-700 mb-6">We combine AI-driven tools with real human care. Whether you’re a solo entrepreneur or scaling up, we’ve got your back.</p>
          <ul className="text-left text-sm space-y-2 max-w-md mx-auto">
            <li>✅ UK-based call handling (no bots)</li>
            <li>✅ Seamless integrations with Outlook, Teams & CRM</li>
            <li>✅ VIP caller support & recognition</li>
            <li>✅ Monthly reporting & analytics</li>
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-olive-700 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Smarten Up Your Office?</h3>
        <a href="#" className="bg-white text-olive-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">Speak to Us Today – 0151 329 2625</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between flex-col md:flex-row text-center md:text-left">
          <p>© 2025 My Smart Office. All rights reserved.</p>
          <p>Powered by automation. Built in the UK 🇬🇧</p>
        </div>
      </footer>
    </div>
  );
}

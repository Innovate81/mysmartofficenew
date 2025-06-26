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
      <section className="text-white py-28 px-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091870620-1a35f2b5a0f9?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded">
          <h2 className="text-5xl font-bold mb-4">Your Office, Smarter and Simplified</h2>
          <p className="text-xl italic mb-6">Smarter service. Smarter support. Real results.</p>
          <a href="#" className="bg-white text-olive-700 px-6 py-3 rounded hover:bg-gray-200 font-semibold">Get Started</a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
          <p className="text-gray-700 text-lg">
            At My Smart Office, we provide fully automated virtual receptionist services for small businesses, start-ups, and entrepreneurs who want to deliver a polished, professional first impression—without the overhead. Our AI-powered assistant is always available to manage your calls, book appointments, and handle live chat with ease.
          </p>
        </div>
      </section>

      {/* What We Do Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Office",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                desc: "Your entire front desk, powered by AI."
              },
              {
                title: "Virtual Receptionist",
            img: "/virtual_receptionist_humanlook.png",    
                desc: "We answer calls, handle chat, and manage enquiries."
              },
              {
                title: "Appointment Booking",
                img: "https://images.unsplash.com/photo-1523475496153-3d6cc150b3df",
                desc: "Book and sync client meetings automatically."
              }
            ].map((card, idx) => (
              <div key={idx} className="relative group rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={card.img + '?auto=format&fit=crop&w=600&q=60'} alt={card.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold px-4">{card.desc}</p>
                </div>
                <div className="absolute bottom-0 bg-white bg-opacity-90 w-full py-3 text-center text-xl font-bold">{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">What to Expect</h3>
          <p className="text-gray-700 text-lg">
            With My Smart Office, your business stays connected, responsive, and professional. We help you capture leads, handle admin, and stay on top of communication—without ever missing a beat.
          </p>
        </div>
      </section>

      {/* CTA */}
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

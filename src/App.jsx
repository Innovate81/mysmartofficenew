import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      
      {/* HERO */}
      <section
        className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Office, Smarter and Simplified</h1>
          <p className="text-lg mb-6 italic">Smarter service. Smarter support. Real results.</p>
          <a href="#" className="bg-white text-olive-700 px-6 py-3 font-semibold rounded hover:bg-gray-200">Get Started</a>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At My Smart Office, we provide fully automated virtual receptionist services for small businesses, start-ups, and entrepreneurs who want to deliver a polished, professional first impression—without the overhead.
          Our AI-powered assistant is always available to manage your calls, book appointments, and handle live chat with ease.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Smart Office',
              desc: 'Your entire front desk, powered by AI.',
              img: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=60',
            },
            {
              title: 'Virtual Receptionist',
              desc: 'We answer calls, handle chat, and manage enquiries.',
              img: 'https://images.unsplash.com/photo-1600185365929-3a2ce3cdb9f9?auto=format&fit=crop&w=800&q=60',
            },
            {
              title: 'Appointment Booking',
              desc: 'Book and sync client meetings automatically.',
              img: '/appointment-booking.png', // Use your uploaded version
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white px-4 text-lg">{item.desc}</p>
              </div>
              <div className="absolute bottom-0 bg-white bg-opacity-90 w-full text-center py-3 text-xl font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          With My Smart Office, your business stays connected, responsive, and professional. We help you capture leads, handle admin, and stay on top of communication—without ever missing a beat.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-olive-700 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Smarten Up Your Office?</h3>
        <a href="#" className="bg-white text-olive-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">Speak to Us Today – 0151 329 2625</a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-sm py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>© 2025 My Smart Office. All rights reserved.</p>
          <p>Powered by automation. Built in the UK 🇬🇧</p>
        </div>
      </footer>
    </div>
  );
}

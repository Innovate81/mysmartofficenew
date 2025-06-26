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
      <section className="bg-cover bg-center text-white py-28 px-4" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581091870620-1a35f2b5a0f9?auto=format&fit=crop&w=1200&q=80)'
      }}>
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


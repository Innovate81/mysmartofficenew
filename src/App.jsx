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
              <p className="text-gray-600 text-sm">We professionally answer calls in your business name, take messages, or transfer calls as ne

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About My Smart Office
        </h1>
        <p className="text-xl text-gray-600 text-center mb-10">
          Your Office, Smarter and Simplified.
        </p>

        <p className="text-gray-700 text-lg mb-8">
          We built <strong>My Smart Office</strong> for one reason: to give small businesses the kind of professional support usually reserved for big-budget firms — without the headache (or the payroll).
        </p>
        <p className="text-gray-700 text-lg mb-8">
          Whether you're a solo founder or a growing team, our virtual PA service keeps your calls answered, your appointments booked, and your day running smoothly — all without lifting a finger.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">🤖 Why We're Different</h2>

        <ul className="space-y-4 text-gray-700 text-lg mb-10">
          <li>
            <strong>AI-Powered, Human-Backed</strong><br />
            We blend smart automation with real, friendly voices. So your business sounds great — every time the phone rings.
          </li>
          <li>
            <strong>No Hiring, No Hassle</strong><br />
            Skip the CVs, contracts, and HR. Just pick your plan, and we handle the rest.
          </li>
          <li>
            <strong>Built for UK Businesses</strong><br />
            We're proudly UK-based, and our services are designed for British businesses first — local tone, local numbers, local knowledge.
          </li>
          <li>
            <strong>Designed to Scale</strong><br />
            From one-man bands to busy agencies, our tools grow with you.
          </li>
        </ul>

        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-4">Want to learn more?</p>
          <a href="/contact" className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

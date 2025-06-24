import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Pick the Right Plan for Your Business</h1>
        <p className="text-lg text-gray-600 mb-10">Whether you're just starting out or scaling up, we’ve got a smart plan for you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Smart Start */}
          <div className="border rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Smart Start</h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">£49<span className="text-base font-medium">/month</span></p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✅ Business phone number & call handling</li>
              <li>✅ Voicemail to email</li>
              <li>✅ Custom call scripts</li>
              <li>✅ UK-based number (0151 or others)</li>
            </ul>
          </div>

          {/* Boost */}
          <div className="border rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Boost</h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">£99<span className="text-base font-medium">/month</span></p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✅ Everything in Smart Start</li>
              <li>✅ Appointment booking via email/calendar</li>
              <li>✅ Live call transfer to mobile</li>
              <li>✅ Weekly call summary reports</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="border rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">Pro</h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">£149<span className="text-base font-medium">/month</span></p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✅ Everything in Boost</li>
              <li>✅ VIP caller flagging & priority response</li>
              <li>✅ CRM integration (Outlook, Teams)</li>
              <li>✅ Basic AI assistant support (FAQs, routing)</li>
            </ul>
          </div>

          {/* Exec */}
          <div className="border rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-red-700 mb-2">Exec</h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">£249<span className="text-base font-medium">/month</span></p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✅ Everything in Pro</li>
              <li>✅ 24/7 call handling</li>
              <li>✅ Dedicated virtual receptionist</li>
              <li>✅ Custom onboarding workflows</li>
              <li>✅ Priority technical support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-700 mb-4 text-lg">Not sure what you need?</p>
          <a href="/contact" className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

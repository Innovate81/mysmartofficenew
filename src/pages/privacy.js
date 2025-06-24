import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          This Privacy Policy outlines how My Smart Office ("we", "our", or "us") collects, uses, and protects your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>Name, email address, phone number (via forms or communication)</li>
          <li>Business contact details</li>
          <li>Call data and messages (for virtual PA services)</li>
          <li>Payment information (processed securely via third-party providers like Stripe)</li>
          <li>Website usage data (via cookies and analytics tools)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>To deliver our virtual PA and communication services</li>
          <li>To manage bookings and call handling tasks</li>
          <li>To communicate with you regarding your account</li>
          <li>To process payments and subscriptions</li>
          <li>To improve our website and service performance</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">3. Legal Basis for Processing</h2>
        <p className="text-gray-700 mb-6">
          We process your personal data based on your consent, our contractual obligations, and legitimate business interests in providing and improving our services.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">4. Data Sharing</h2>
        <p className="text-gray-700 mb-6">
          We do not sell your data. We may share it with trusted third-party providers (e.g. Stripe, CRM tools, phone systems) solely for the purpose of delivering our services. All providers comply with UK GDPR requirements.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">5. Data Retention</h2>
        <p className="text-gray-700 mb-6">
          We retain your information for as long as necessary to provide services and meet legal or regulatory obligations. You may request deletion at any time.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">6. Your Rights</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>Right to access your personal data</li>
          <li>Right to correct inaccurate information</li>
          <li>Right to request deletion</li>
          <li>Right to object to processing or request restriction</li>
          <li>Right to data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">7. Cookies</h2>
        <p className="text-gray-700 mb-6">
          Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">8. Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have questions about this policy or wish to exercise your rights, contact us at: <br />
          <strong>Email:</strong> info@mysmartofficeuk.co.uk<br />
          <strong>Phone:</strong> 0151 329 2625
        </p>

        <p className="text-sm text-gray-500">Last updated: June 2025</p>
      </div>
    </div>
  );
}

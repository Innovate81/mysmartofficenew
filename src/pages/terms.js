import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
        <p className="text-gray-700 mb-6">
          These Terms & Conditions ("Terms") apply to all services provided by My Smart Office ("we", "us", "our") to clients ("you", "your"). By using our website or services, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">1. Services</h2>
        <p className="text-gray-700 mb-6">
          We provide virtual PA and receptionist services including call handling, appointment booking, and live message delivery. The scope of services depends on your chosen plan.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">2. Payments</h2>
        <p className="text-gray-700 mb-6">
          All plans are billed monthly in advance via our secure payment provider (e.g. Stripe). Payments are non-refundable except where required by law.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">3. Cancellations & Changes</h2>
        <p className="text-gray-700 mb-6">
          You may cancel your subscription at any time with 30 days’ notice. We reserve the right to adjust pricing or plans with notice provided via email or our website.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">4. Client Responsibilities</h2>
        <p className="text-gray-700 mb-6">
          You are responsible for providing accurate and timely information to enable us to perform services. We are not liable for errors caused by inaccurate or incomplete information.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">5. Acceptable Use</h2>
        <p className="text-gray-700 mb-6">
          You agree not to use our services for unlawful, abusive, or fraudulent purposes. We may suspend services without refund if these terms are violated.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">6. Liability</h2>
        <p className="text-gray-700 mb-6">
          We aim to provide reliable services, but we are not liable for any indirect, incidental, or consequential damages. Total liability is limited to the amount paid by you in the past 3 months.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">7. Data Protection</h2>
        <p className="text-gray-700 mb-6">
          We comply with the UK GDPR. Please refer to our <a href="/privacy" className="text-green-700 underline">Privacy Policy</a> for more information on how we handle data.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">8. Changes to Terms</h2>
        <p className="text-gray-700 mb-6">
          We may update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">9. Contact</h2>
        <p className="text-gray-700 mb-6">
          For questions regarding these Terms, contact us at:<br />
          <strong>Email:</strong> info@mysmartofficeuk.co.uk<br />
          <strong>Phone:</strong> 0151 329 2625
        </p>

        <p className="text-sm text-gray-500">Last updated: June 2025</p>
      </div>
    </div>
  );
}

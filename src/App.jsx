
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="bg-olive-700 text-white p-6 text-center text-2xl font-bold">
        My Smart Office
      </header>
      <main className="p-8 space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Office, Smarter and Simplified</h1>
          <p className="text-lg text-gray-700">Professional call answering, appointment booking & more.</p>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="border p-4 rounded shadow">📞 Call Handling</div>
          <div className="border p-4 rounded shadow">📅 Appointment Booking</div>
          <div className="border p-4 rounded shadow">💬 Live Chat Management</div>
          <div className="border p-4 rounded shadow">📈 Business Support</div>
        </section>
        <section className="text-center mt-8">
          <button className="bg-olive-700 hover:bg-olive-800 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;

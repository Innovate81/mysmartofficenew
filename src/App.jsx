import React from "react";

const services = [
  {
    title: "Smart Office",
    image: "/smart-office.jpg", // Add this to /public
  },
  {
    title: "Virtual Receptionist",
    image: "/virtual-receptionist.jpg", // Add this to /public
  },
  {
    title: "Appointment Booking",
    image: "/appointment-booking.jpg", // Add this to /public
  },
];

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#787455] text-white py-4 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="My Smart Office Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">My Smart Office</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-human.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
          <h2 className="text-4xl font-bold mb-2">Your Office, Smarter and Simplified</h2>
          <p className="text-lg mb-4">Smarter service. Smarter support. Real results.</p>
          <button className="bg-white text-[#787455] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-lg">
          At My Smart Office we provide fully automated virtual receptionist services for small
          businesses, start-ups, and entrepreneurs who want to deliver a polished, professional
          first impression—without the overhead.
        </p>
      </section>

      {/* Service Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="py-4 text-lg font-semibold">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
        <p className="max-w-2xl mx-auto text-lg">
          With My Smart Office, your business stays connected, responsive, and professional.
        </p>
      </section>

      {/* Call to Action */}
      <footer className="bg-[#006b7c] text-white py-6 text-center font-bold text-lg">
        Get Started today. Call us at 0151 329 2625.
      </footer>
    </div>
  );
}


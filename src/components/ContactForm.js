import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted. Thank you!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Message:</label><br />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem', height: '150px' }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: '#3D5A40', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px' }}>
        Send Message
      </button>
    </form>
  );
}
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | My Smart Office</title>
        <meta name="description" content="Get in touch with My Smart Office for support and enquiries." />
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#3D5A40' }}>Contact Us</h1>
          <p>We’re here to help. Reach out using the form or call us directly.</p>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>📞 0151 329 2625</p>
          <p>📧 info@mysmartofficeuk.co.uk</p>
        </section>
        <ContactForm />
      </main>
    </>
  );
}
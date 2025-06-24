import Head from 'next/head';
import Packages from '../components/Packages';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Smart Office</title>
        <meta name="description" content="Your Office, Smarter and Simplified" />
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <section style={{ textAlign: 'center', padding: '4rem 0', backgroundColor: '#3D5A40', color: 'white' }}>
          <h1 style={{ fontSize: '3rem' }}>My Smart Office</h1>
          <p>Your Office, Smarter and Simplified</p>
        </section>
        <section style={{ padding: '2rem 0' }}>
          <h2>What We Offer</h2>
          <ul>
            <li>AI-powered call answering</li>
            <li>Live chat & message handling</li>
            <li>Appointment scheduling</li>
            <li>CRM and calendar integration</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/pricing" style={{
            display: 'inline-block',
            backgroundColor: '#3D5A40',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            View Pricing Plans
          </a>
        </div>

        <Packages />
        <Contact />
      </main>
    </>
  );
}

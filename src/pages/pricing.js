import Head from 'next/head';
import PricingTable from '../components/PricingTable';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | My Smart Office</title>
        <meta name="description" content="Choose the perfect virtual PA package for your business." />
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#3D5A40' }}>Our Pricing Plans</h1>
          <p>Select the right support level for your business</p>
        </section>
        <PricingTable />
      </main>
    </>
  );
}
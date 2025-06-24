export default function PricingTable() {
  const plans = [
    {
      name: "Smart Start",
      price: "£29/mo",
      features: [
        "Professional call answering",
        "Basic message relay",
        "UK business hours support"
      ]
    },
    {
      name: "Boost",
      price: "£49/mo",
      features: [
        "All Smart Start features",
        "Appointment scheduling",
        "Calendar & email handling"
      ]
    },
    {
      name: "Pro",
      price: "£79/mo",
      features: [
        "All Boost features",
        "CRM integration",
        "Live chat management"
      ]
    },
    {
      name: "Exec",
      price: "£129/mo",
      features: [
        "All Pro features",
        "Dedicated line & caller ID",
        "VIP call routing"
      ]
    }
  ];

  return (
    <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      {plans.map(plan => (
        <div key={plan.name} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
          <h2>{plan.name}</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{plan.price}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {plan.features.map(f => <li key={f} style={{ marginBottom: '0.5rem' }}>✅ {f}</li>)}
          </ul>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#3D5A40', color: 'white', border: 'none', borderRadius: '4px' }}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
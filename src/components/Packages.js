export default function Packages() {
  const plans = [
    { name: "Smart Start", price: "£29/mo", features: ["Call answering", "Basic message relay"] },
    { name: "Boost", price: "£49/mo", features: ["Includes Smart Start", "Calendar booking", "Email handling"] },
    { name: "Pro", price: "£79/mo", features: ["Includes Boost", "CRM integration", "Live chat support"] },
    { name: "Exec", price: "£129/mo", features: ["Includes Pro", "Dedicated number", "Priority support"] },
  ];

  return (
    <section>
      <h2>Packages</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {plans.map(plan => (
          <div key={plan.name} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h3>{plan.name}</h3>
            <p><strong>{plan.price}</strong></p>
            <ul>
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
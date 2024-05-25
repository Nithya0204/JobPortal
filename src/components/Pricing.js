import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  plans: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  plan: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '200px',
    textAlign: 'left',
  },
  planTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  features: {
    listStyleType: 'none',
    padding: '0',
    textAlign: 'left',
  },
  feature: {
    marginBottom: '5px',
  },
  price: {
    fontSize: '18px',
    margin: '10px 0',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

function Pricing() {
  const handleSubscribe = (plan) => {
    alert(`You have subscribed to the ${plan} plan`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pricing</h2>
      <p>Choose the plan that suits you best:</p>
      <div style={styles.plans}>
        <div style={styles.plan}>
          <h3 style={styles.planTitle}>Basic</h3>
          <ul style={styles.features}>
            <li style={styles.feature}>Feature 1</li>
            <li style={styles.feature}>Feature 2</li>
            <li style={styles.feature}>Feature 3</li>
          </ul>
          <p style={styles.price}>$10/month</p>
          <button style={styles.button} onClick={() => handleSubscribe('Basic')}>Subscribe</button>
        </div>
        <div style={styles.plan}>
          <h3 style={styles.planTitle}>Pro</h3>
          <ul style={styles.features}>
            <li style={styles.feature}>Feature 1</li>
            <li style={styles.feature}>Feature 2</li>
            <li style={styles.feature}>Feature 3</li>
            <li style={styles.feature}>Feature 4</li>
          </ul>
          <p style={styles.price}>$20/month</p>
          <button style={styles.button} onClick={() => handleSubscribe('Pro')}>Subscribe</button>
        </div>
        <div style={styles.plan}>
          <h3 style={styles.planTitle}>Premium</h3>
          <ul style={styles.features}>
            <li style={styles.feature}>Feature 1</li>
            <li style={styles.feature}>Feature 2</li>
            <li style={styles.feature}>Feature 3</li>
            <li style={styles.feature}>Feature 4</li>
            <li style={styles.feature}>Feature 5</li>
          </ul>
          <p style={styles.price}>$30/month</p>
          <button style={styles.button} onClick={() => handleSubscribe('Premium')}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

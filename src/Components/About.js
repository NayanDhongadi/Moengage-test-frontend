import React from 'react';

function About() {
  const containerStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '2em',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: '#666',
  };
  return (
    <div style={containerStyle}>
    <h1 style={headerStyle}>About Us</h1>
    <p style={paragraphStyle}>
      We are a company dedicated to providing the best services to our customers. Our team is composed of experienced professionals who are passionate about their work.
    </p>
  </div>

  );
}

export default About;

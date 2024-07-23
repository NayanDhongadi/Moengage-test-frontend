import React from 'react'

function Services() {
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
    <h1 style={headerStyle}>Our Services</h1>
    <p style={paragraphStyle}>
      We offer a wide range of services to meet your needs. From web development to graphic design, we have the expertise to help you succeed.
    </p>
  </div>
  
  )
}

export default Services
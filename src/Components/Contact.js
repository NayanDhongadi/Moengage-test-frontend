import React from 'react'

function Contact() {
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
    <h1 style={headerStyle}>Contact Us</h1>
    <p style={paragraphStyle}>
      You can reach us via email at <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>.
    </p>
  </div>
  )
}

export default Contact
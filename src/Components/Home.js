import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <section className="content">
        <h2>About Us</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

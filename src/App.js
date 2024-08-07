import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../src/Components/About'
import Contact from '../src/Components/Contact'
import Services from '../src/Components/Services'



function App() {

  console.log("Navigator::", navigator, process.env.PUBLIC_URL);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

      navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceWork/serviceworker.js`)

        .then((registration) => {
          console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
          console.log('ServiceWorker registration successful with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed:', error);
        });
    });
  }
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

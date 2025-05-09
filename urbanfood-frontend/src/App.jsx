import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Payments from './pages/Payments';
import Delivery from './pages/Delivery';
import Supplier from './pages/Suppliers';
import Reviews from './pages/Reviews';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* Navbar with dark mode toggle */}
      <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span>🍔</span> UrbanFood
          </Link>
          <div className="navbar-links">
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/deliveries">Delivery</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/reviews">Reviews</Link>
            <button 
              onClick={toggleDarkMode} 
              className="dark-mode-toggle"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Wrap routes in a div with dark mode class */}
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/deliveries" element={<Delivery />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}
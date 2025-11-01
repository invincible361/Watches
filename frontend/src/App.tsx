import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Pages
import HomePage from './pages/HomePage';
import WatchesPage from './pages/WatchesPage';
import WatchDetailPage from './pages/WatchDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminWatchesPage from './pages/admin/AdminWatchesPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';

function App() {
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);
  
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App d-flex flex-column min-vh-100">
            {/* Top Bar */}
            <div className="bg-light py-2 border-bottom">
              <div className="container d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted me-3">
                    <i className="fas fa-phone-alt me-1"></i> +1 (800) 555-1234
                  </small>
                  <small className="text-muted">
                    <i className="fas fa-envelope me-1"></i> info@luxurywatchshop.com
                  </small>
                </div>
                <div>
                  <Link to="/login" className="text-decoration-none text-muted me-3">
                    <small><i className="fas fa-user me-1"></i> Login</small>
                  </Link>
                  <Link to="/register" className="text-decoration-none text-muted">
                    <small><i className="fas fa-user-plus me-1"></i> Register</small>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Header */}
            <header className="luxury-header">
              <div className="container">
                <div className="row align-items-center py-2">
                  <div className="col-md-3">
                    <Link to="/" className="text-decoration-none">
                      <h1 className="brand-logo mb-0">ETERNITY</h1>
                      <small className="text-muted d-block">Luxury Timepieces</small>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="search-bar">
                      <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search for luxury watches..." 
                      />
                      <button className="search-button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <Link to="/cart" className="btn btn-outline-luxury me-2">
                      <i className="fas fa-shopping-cart"></i> Cart
                    </Link>
                    <Link to="/profile" className="btn btn-luxury">
                      <i className="fas fa-user"></i> Account
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            
            {/* Navigation */}
            <nav className="border-top border-bottom py-2">
              <div className="container">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item position-relative" 
                    onMouseEnter={() => setShowBrandDropdown(true)}
                    onMouseLeave={() => setShowBrandDropdown(false)}>
                    <NavLink to="/watches" className="nav-link">Brands</NavLink>
                    {showBrandDropdown && (
                      <div className="dropdown-menu show">
                        <Link to="/watches?brand=Rolex" className="dropdown-item">Rolex</Link>
                        <Link to="/watches?brand=Omega" className="dropdown-item">Omega</Link>
                        <Link to="/watches?brand=Tag Heuer" className="dropdown-item">Tag Heuer</Link>
                        <Link to="/watches?brand=Patek Philippe" className="dropdown-item">Patek Philippe</Link>
                        <Link to="/watches?brand=Audemars Piguet" className="dropdown-item">Audemars Piguet</Link>
                        <Link to="/watches" className="dropdown-item">View All Brands</Link>
                      </div>
                    )}
                  </li>
                  <li className="nav-item position-relative"
                    onMouseEnter={() => setShowCollectionDropdown(true)}
                    onMouseLeave={() => setShowCollectionDropdown(false)}>
                    <NavLink to="/watches" className="nav-link">Collections</NavLink>
                    {showCollectionDropdown && (
                      <div className="dropdown-menu show">
                        <Link to="/watches?collection=Luxury" className="dropdown-item">Luxury Collection</Link>
                        <Link to="/watches?collection=Sport" className="dropdown-item">Sport Watches</Link>
                        <Link to="/watches?collection=Classic" className="dropdown-item">Classic Timepieces</Link>
                        <Link to="/watches?collection=Limited" className="dropdown-item">Limited Editions</Link>
                        <Link to="/watches" className="dropdown-item">View All Collections</Link>
                      </div>
                    )}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/watches" className="nav-link">New Arrivals</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin" className="nav-link">Admin</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            
            {/* Main Content */}
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/watches" element={<WatchesPage />} />
                <Route path="/watch/:id" element={<WatchDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/watches" element={<AdminWatchesPage />} />
                <Route path="/admin/orders" element={<AdminOrdersPage />} />
              </Routes>
            </main>
            
            {/* Footer */}
            <footer className="luxury-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h5 className="footer-title">ETERNITY</h5>
                    <p className="text-muted mb-4">Discover the finest luxury timepieces from the world's most prestigious watchmakers.</p>
                    <div className="d-flex">
                      <a href="#" className="me-3 text-white"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" className="me-3 text-white"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="me-3 text-white"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="text-white"><i className="fab fa-pinterest"></i></a>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h5 className="footer-title">Quick Links</h5>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/watches" className="footer-link">Watches</Link>
                    <Link to="/profile" className="footer-link">My Account</Link>
                    <Link to="/cart" className="footer-link">Shopping Cart</Link>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h5 className="footer-title">Information</h5>
                    <a href="#" className="footer-link">About Us</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms & Conditions</a>
                    <a href="#" className="footer-link">Contact Us</a>
                  </div>
                  <div className="col-md-3">
                    <h5 className="footer-title">Contact Us</h5>
                    <p className="text-muted mb-2"><i className="fas fa-map-marker-alt me-2"></i> 123 Luxury Lane, New York, NY 10001</p>
                    <p className="text-muted mb-2"><i className="fas fa-phone-alt me-2"></i> +1 (800) 555-1234</p>
                    <p className="text-muted mb-2"><i className="fas fa-envelope me-2"></i> info@luxurywatchshop.com</p>
                  </div>
                </div>
                <div className="row mt-4 pt-4 border-top border-secondary">
                  <div className="col-md-6">
                    <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} ETERNITY Luxury Watches. All rights reserved.</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <img src="https://via.placeholder.com/250x30?text=Payment+Methods" alt="Payment Methods" className="img-fluid" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

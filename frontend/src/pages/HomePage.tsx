import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Mock data for featured watches
  const featuredWatches = [
    {
      id: 1,
      name: 'Submariner Date',
      brand: 'Rolex',
      price: 12500,
      image: 'https://via.placeholder.com/300x300?text=Rolex+Submariner'
    },
    {
      id: 2,
      name: 'Seamaster Professional',
      brand: 'Omega',
      price: 6500,
      image: 'https://via.placeholder.com/300x300?text=Omega+Seamaster'
    },
    {
      id: 3,
      name: 'Royal Oak',
      brand: 'Audemars Piguet',
      price: 32000,
      image: 'https://via.placeholder.com/300x300?text=AP+Royal+Oak'
    },
    {
      id: 4,
      name: 'Carrera Chronograph',
      brand: 'Tag Heuer',
      price: 5200,
      image: 'https://via.placeholder.com/300x300?text=Tag+Heuer+Carrera'
    }
  ];

  // Mock data for new arrivals
  const newArrivals = [
    {
      id: 5,
      name: 'Nautilus',
      brand: 'Patek Philippe',
      price: 85000,
      image: 'https://via.placeholder.com/300x300?text=Patek+Nautilus'
    },
    {
      id: 6,
      name: 'Luminor Marina',
      brand: 'Panerai',
      price: 8900,
      image: 'https://via.placeholder.com/300x300?text=Panerai+Luminor'
    },
    {
      id: 7,
      name: 'Portugieser Chronograph',
      brand: 'IWC',
      price: 7600,
      image: 'https://via.placeholder.com/300x300?text=IWC+Portugieser'
    },
    {
      id: 8,
      name: 'Navitimer',
      brand: 'Breitling',
      price: 8500,
      image: 'https://via.placeholder.com/300x300?text=Breitling+Navitimer'
    }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1200x500?text=Luxury+Timepieces" className="d-block w-100" alt="Luxury Watches" />
            <div className="carousel-caption">
              <h3>Discover Timeless Elegance</h3>
              <p>Explore our collection of prestigious timepieces from the world's finest watchmakers</p>
              <Link to="/watches" className="btn btn-luxury mt-3">Shop Collection</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x500?text=Swiss+Craftsmanship" className="d-block w-100" alt="Swiss Watches" />
            <div className="carousel-caption">
              <h3>Swiss Excellence</h3>
              <p>Precision engineering and unparalleled craftsmanship in every timepiece</p>
              <Link to="/watches?collection=Swiss" className="btn btn-luxury mt-3">Explore Swiss Watches</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x500?text=Limited+Editions" className="d-block w-100" alt="Limited Edition Watches" />
            <div className="carousel-caption">
              <h3>Limited Edition Masterpieces</h3>
              <p>Exclusive timepieces for the discerning collector</p>
              <Link to="/watches?collection=Limited" className="btn btn-luxury mt-3">View Limited Editions</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Brand Showcase */}
      <div className="container mb-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-8">
            <h2 className="section-title">Prestigious Brands</h2>
            <p className="text-muted">Discover timepieces from the world's most renowned watchmakers</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches?brand=Rolex" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=Rolex" alt="Rolex" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">Rolex</p>
            </Link>
          </div>
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches?brand=Omega" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=Omega" alt="Omega" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">Omega</p>
            </Link>
          </div>
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches?brand=Patek+Philippe" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=Patek" alt="Patek Philippe" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">Patek Philippe</p>
            </Link>
          </div>
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches?brand=Audemars+Piguet" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=AP" alt="Audemars Piguet" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">Audemars Piguet</p>
            </Link>
          </div>
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches?brand=Tag+Heuer" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=Tag+Heuer" alt="Tag Heuer" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">Tag Heuer</p>
            </Link>
          </div>
          <div className="col-md-2 col-4 mb-4 text-center">
            <Link to="/watches" className="text-decoration-none">
              <div className="brand-logo-container p-3 border rounded">
                <img src="https://via.placeholder.com/100x50?text=More" alt="More Brands" className="img-fluid" />
              </div>
              <p className="mt-2 mb-0 text-dark">More Brands</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Watches */}
      <div className="featured-section bg-light py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-md-8">
              <h2 className="section-title">Featured Timepieces</h2>
              <p className="text-muted">Exquisite watches selected for their exceptional craftsmanship and design</p>
            </div>
          </div>
          <div className="row">
            {featuredWatches.map(watch => (
              <div className="col-md-3 col-6 mb-4" key={watch.id}>
                <div className="product-card">
                  <Link to={`/watch/${watch.id}`} className="text-decoration-none">
                    <img src={watch.image} alt={watch.name} className="img-fluid" />
                    <div className="p-3">
                      <p className="product-brand mb-1">{watch.brand}</p>
                      <h5 className="product-title">{watch.name}</h5>
                      <p className="product-price">${watch.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/watches" className="btn btn-outline-luxury">View All Watches</Link>
          </div>
        </div>
      </div>
      
      {/* Services */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="fas fa-certificate fa-3x" style={{ color: 'var(--secondary-color)' }}></i>
              </div>
              <h4 className="mb-3">Authenticity Guaranteed</h4>
              <p className="text-muted">Every timepiece in our collection comes with a certificate of authenticity and a 2-year warranty.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="fas fa-shipping-fast fa-3x" style={{ color: 'var(--secondary-color)' }}></i>
              </div>
              <h4 className="mb-3">Worldwide Shipping</h4>
              <p className="text-muted">Complimentary insured shipping on all orders. Express delivery options available.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className="fas fa-hands-helping fa-3x" style={{ color: 'var(--secondary-color)' }}></i>
              </div>
              <h4 className="mb-3">Expert Consultation</h4>
              <p className="text-muted">Our horology experts are available to assist you in finding the perfect timepiece.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Arrivals */}
      <div className="container mb-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-8">
            <h2 className="section-title">New Arrivals</h2>
            <p className="text-muted">The latest additions to our prestigious collection</p>
          </div>
        </div>
        <div className="row">
          {newArrivals.map(watch => (
            <div className="col-md-3 col-6 mb-4" key={watch.id}>
              <div className="product-card">
                <Link to={`/watch/${watch.id}`} className="text-decoration-none">
                  <img src={watch.image} alt={watch.name} className="img-fluid" />
                  <div className="p-3">
                    <p className="product-brand mb-1">{watch.brand}</p>
                    <h5 className="product-title">{watch.name}</h5>
                    <p className="product-price">${watch.price.toLocaleString()}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/watches" className="btn btn-luxury">Explore New Arrivals</Link>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-light py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-muted mb-4">Stay updated with the latest arrivals, exclusive offers, and horological insights</p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Your Email Address" />
                    <button className="btn btn-luxury" type="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
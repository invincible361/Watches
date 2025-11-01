import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Mock data for watches
const watchesData = [
  {
    _id: '1',
    name: 'Submariner',
    brand: 'Rolex',
    price: 8999.99,
    description: 'The Rolex Submariner is a classic diving watch known for its durability and timeless design. The Submariner\\\'s robust and functional design swiftly became iconic. With its rotatable bezel, luminescent hour markers, and waterproof case, the Submariner was designed as the ultimate diving watch.',
    imageUrl: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png',
    features: ['Water resistant to 300m', 'Automatic movement', 'Stainless steel case', '41mm diameter'],
    inStock: true,
    additionalImages: [
      'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png',
      'https://content.rolex.com/dam/new-watches-2020/new-submariner/all-new-submariner-m124060-0001-side-view.jpg',
      'https://content.rolex.com/dam/new-watches-2020/new-submariner/all-new-submariner-m124060-0001-back-view.jpg'
    ],
    details: {
      movement: 'Perpetual, mechanical, self-winding',
      caseMaterial: '904L stainless steel',
      bezel: 'Unidirectional rotatable with Cerachrom insert',
      waterResistance: '300 meters / 1000 feet',
      dial: 'Black with luminescent hour markers',
      bracelet: 'Oyster, flat three-piece links'
    }
  },
  {
    _id: '2',
    name: 'Speedmaster Professional',
    brand: 'Omega',
    price: 6299.99,
    description: 'The Omega Speedmaster Professional, also known as the "Moonwatch," was worn by astronauts during the Apollo missions. The Speedmaster is one of the most iconic chronographs in the world. Having been a part of all six lunar missions, the timepiece is an impressive representation of the brand\\\'s adventurous pioneering spirit.',
    imageUrl: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-l.png',
    features: ['Chronograph function', 'Manual-winding movement', 'Hesalite crystal', '42mm diameter'],
    inStock: true,
    additionalImages: [
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-l.png',
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-2-l.png',
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-3-l.png'
    ],
    details: {
      movement: 'Omega Co-Axial Master Chronometer Calibre 3861',
      caseMaterial: 'Stainless steel',
      bezel: 'Fixed with tachymetric scale',
      waterResistance: '50 meters / 167 feet',
      dial: 'Black with luminous hands and hour markers',
      bracelet: 'Stainless steel bracelet with folding clasp'
    }
  },
  {
    _id: '3',
    name: 'Royal Oak',
    brand: 'Audemars Piguet',
    price: 25000.00,
    description: 'The Audemars Piguet Royal Oak is an iconic luxury sports watch with its distinctive octagonal bezel and "tapisserie" dial. Designed by Gérald Genta and introduced in 1972, the Royal Oak revolutionized the concept of luxury sports watches with its stainless steel case, octagonal bezel with exposed screws, and integrated bracelet.',
    imageUrl: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/std.png',
    features: ['Automatic movement', 'Stainless steel case', 'Integrated bracelet', '41mm diameter'],
    inStock: true,
    additionalImages: [
      'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/std.png',
      'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/side.png',
      'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/back.png'
    ],
    details: {
      movement: 'Manufacture Calibre 4302, self-winding',
      caseMaterial: 'Stainless steel',
      bezel: 'Octagonal with eight visible screws',
      waterResistance: '50 meters / 165 feet',
      dial: 'Blue with "Grande Tapisserie" pattern',
      bracelet: 'Stainless steel with AP folding clasp'
    }
  },
  {
    _id: '4',
    name: 'Nautilus',
    brand: 'Patek Philippe',
    price: 35000.00,
    description: 'The Patek Philippe Nautilus is a highly sought-after luxury sports watch with an elegant porthole-inspired design. Created by legendary watch designer Gérald Genta in 1976, the Nautilus has become one of the most coveted timepieces in the world, known for its distinctive porthole-shaped case and horizontal embossed dial.',
    imageUrl: 'https://www.patek.com/resources/img/layout/menu/watches/nautilus/5711_1A_001.png',
    features: ['Automatic movement', 'Stainless steel case', 'Date display', '40mm diameter'],
    inStock: false,
    additionalImages: [
      'https://www.patek.com/resources/img/layout/menu/watches/nautilus/5711_1A_001.png',
      'https://www.patek.com/resources/img/layout/menu/watches/nautilus/5711_1A_001_side.png',
      'https://www.patek.com/resources/img/layout/menu/watches/nautilus/5711_1A_001_back.png'
    ],
    details: {
      movement: 'Caliber 26‑330 S C, self-winding',
      caseMaterial: 'Stainless steel',
      bezel: 'Integrated with case design',
      waterResistance: '120 meters / 394 feet',
      dial: 'Blue with horizontal embossed pattern',
      bracelet: 'Stainless steel with fold-over clasp'
    }
  },
  {
    _id: '5',
    name: 'Luminor Marina',
    brand: 'Panerai',
    price: 7900.00,
    description: 'The Panerai Luminor Marina features the iconic crown guard and clean dial design that made the brand famous. Originally designed for the Italian Navy, the Luminor Marina has become a symbol of Italian design excellence and Swiss watchmaking precision, known for its distinctive cushion-shaped case and patented crown-protecting bridge.',
    imageUrl: 'https://www.panerai.com/content/dam/panerai/products/collections/luminor/pam01312/PAM01312_Front.png',
    features: ['Automatic movement', 'Stainless steel case', 'Power reserve indicator', '44mm diameter'],
    inStock: true,
    additionalImages: [
      'https://www.panerai.com/content/dam/panerai/products/collections/luminor/pam01312/PAM01312_Front.png',
      'https://www.panerai.com/content/dam/panerai/products/collections/luminor/pam01312/PAM01312_Side.png',
      'https://www.panerai.com/content/dam/panerai/products/collections/luminor/pam01312/PAM01312_Back.png'
    ],
    details: {
      movement: 'P.9010 calibre, automatic',
      caseMaterial: 'AISI 316L polished steel',
      bezel: 'Polished steel, fixed',
      waterResistance: '300 meters / 984 feet',
      dial: 'Black with luminous Arabic numerals and hour markers',
      bracelet: 'Black alligator strap with steel buckle'
    }
  },
  {
    _id: '6',
    name: 'Portugieser Chronograph',
    brand: 'IWC',
    price: 7600.00,
    description: 'The IWC Portugieser Chronograph is known for its clean dial design and precision timing capabilities. First introduced in the 1990s, the Portugieser Chronograph has become one of IWC\'s most iconic models, celebrated for its elegant proportions, applied Arabic numerals, and thin bezel that maximizes dial presence.',
    imageUrl: 'https://www.iwc.com/content/dam/rcq/iwc/19/58/69/0/1958690.png',
    features: ['Chronograph function', 'Automatic movement', 'Alligator leather strap', '41mm diameter'],
    inStock: true,
    additionalImages: [
      'https://www.iwc.com/content/dam/rcq/iwc/19/58/69/0/1958690.png',
      'https://www.iwc.com/content/dam/rcq/iwc/19/58/69/0/1958690_side.png',
      'https://www.iwc.com/content/dam/rcq/iwc/19/58/69/0/1958690_back.png'
    ],
    details: {
      movement: 'IWC manufacture calibre 69355',
      caseMaterial: 'Stainless steel',
      bezel: 'Fixed, stainless steel',
      waterResistance: '30 meters / 100 feet',
      dial: 'Silver-plated with applied Arabic numerals',
      bracelet: 'Santoni alligator leather strap'
    }
  },
  {
    _id: '7',
    name: 'Tank',
    brand: 'Cartier',
    price: 3950.00,
    description: 'The Cartier Tank is an elegant rectangular watch that has been an icon of refined taste for over a century. Inspired by the horizontal lines of Renault tanks seen on the Western Front, Louis Cartier created this legendary timepiece in 1917. Its distinctive rectangular case, clean dial with Roman numerals, and sapphire cabochon crown have made it a symbol of timeless elegance.',
    imageUrl: 'https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg',
    features: ['Quartz movement', 'Steel case', 'Leather strap', 'Sapphire crystal'],
    inStock: true,
    additionalImages: [
      'https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg',
      'https://www.cartier.com/variants/images/44733502651435015/img2/w400.jpg',
      'https://www.cartier.com/variants/images/44733502651435015/img3/w400.jpg'
    ],
    details: {
      movement: 'Cartier calibre 1847 MC, quartz',
      caseMaterial: 'Stainless steel',
      bezel: 'Integrated with case',
      waterResistance: '30 meters / 100 feet',
      dial: 'Silvered with black Roman numerals',
      bracelet: 'Black alligator leather strap'
    }
  },
  {
    _id: '8',
    name: 'Seamaster Diver 300M',
    brand: 'Omega',
    price: 5200.00,
    description: 'The Omega Seamaster Diver 300M combines professional diving features with elegant design, made famous as James Bond\'s watch. First introduced in 1993, the Seamaster Diver 300M gained worldwide fame when it became James Bond\'s watch in "GoldenEye" (1995). The modern version features a ceramic bezel, ceramic dial with laser-engraved waves, and a Master Chronometer movement.',
    imageUrl: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l.png',
    features: ['Water resistant to 300m', 'Automatic movement', 'Ceramic bezel', '42mm diameter'],
    inStock: true,
    additionalImages: [
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l.png',
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-2-l.png',
      'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-3-l.png'
    ],
    details: {
      movement: 'Omega Co-Axial Master Chronometer Calibre 8800',
      caseMaterial: 'Stainless steel',
      bezel: 'Rotating with ceramic insert',
      waterResistance: '300 meters / 1000 feet',
      dial: 'Blue ceramic with laser-engraved waves',
      bracelet: 'Stainless steel with folding clasp'
    }
  }
];

const WatchDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Find the watch by ID (in a real app, this would be an API call)
  const watch = watchesData.find(w => w._id === id);
  
  if (!watch) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Watch not found!</div>
        <Link to="/watches" className="btn btn-outline-luxury mt-3">
          <i className="fas fa-arrow-left me-2"></i>
          Return to Collection
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      _id: watch._id,
      name: watch.name,
      brand: watch.brand,
      price: watch.price,
      imageUrl: watch.imageUrl,
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  // Similar watches (mock data - would be based on brand or style in real app)
  const similarWatches = watchesData
    .filter(w => w._id !== watch._id && w.brand === watch.brand)
    .slice(0, 4);

  return (
    <div className="product-detail-container">
      {/* Breadcrumb */}
      <div className="container mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/watches">Collection</Link></li>
            <li className="breadcrumb-item"><Link to={`/watches?brand=${watch.brand}`}>{watch.brand}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{watch.name}</li>
          </ol>
        </nav>
      </div>
      
      <div className="container mb-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-lg-6 mb-4">
            <div className="product-image-container">
              <img 
                src={watch.additionalImages?.[activeImage] || watch.imageUrl} 
                alt={watch.name} 
                className="img-fluid main-product-image"
              />
              
              {watch.additionalImages && watch.additionalImages.length > 1 && (
                <div className="product-thumbnails mt-3 d-flex">
                  {watch.additionalImages.map((img, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail-container me-2 ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={img} alt={`${watch.name} view ${index + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="col-lg-6">
            <div className="product-info-container">
              <h6 className="text-uppercase brand-name mb-2">{watch.brand}</h6>
              <h2 className="product-title mb-3">{watch.name}</h2>
              <div className="product-price mb-4">${watch.price.toLocaleString()}</div>
              
              <div className="product-description mb-4">
                <p>{watch.description}</p>
              </div>
              
              <div className="product-actions mb-4">
                {watch.inStock ? (
                  <>
                    <div className="d-flex align-items-center mb-3">
                      <label htmlFor="quantity" className="me-3">Quantity:</label>
                      <select 
                        id="quantity" 
                        className="form-select form-select-sm quantity-select" 
                        value={quantity}
                        onChange={handleQuantityChange}
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <button 
                      className="btn btn-luxury btn-lg w-100 mb-3"
                      onClick={handleAddToCart}
                    >
                      <i className="fas fa-shopping-cart me-2"></i>
                      Add to Cart
                    </button>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-luxury flex-grow-1 me-2">
                        <i className="far fa-heart me-2"></i>
                        Add to Wishlist
                      </button>
                      <button className="btn btn-outline-luxury flex-grow-1">
                        <i className="fas fa-share-alt me-2"></i>
                        Share
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="btn btn-secondary btn-lg w-100 mb-3" disabled>
                      Out of Stock
                    </button>
                    <button className="btn btn-outline-luxury w-100">
                      <i className="far fa-bell me-2"></i>
                      Notify Me When Available
                    </button>
                  </>
                )}
              </div>
              
              <div className="product-meta mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Authenticity Guaranteed</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-shipping-fast me-2"></i>
                  <span>Free Shipping & Returns</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-shield-alt me-2"></i>
                  <span>2-Year International Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="container mb-5">
        <ul className="nav nav-tabs" id="productTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs" type="button" role="tab" aria-controls="specs" aria-selected="true">
              Specifications
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="features-tab" data-bs-toggle="tab" data-bs-target="#features" type="button" role="tab" aria-controls="features" aria-selected="false">
              Features
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery" type="button" role="tab" aria-controls="delivery" aria-selected="false">
              Delivery & Returns
            </button>
          </li>
        </ul>
        <div className="tab-content p-4 border border-top-0" id="productTabsContent">
          <div className="tab-pane fade show active" id="specs" role="tabpanel" aria-labelledby="specs-tab">
            <div className="row">
              <div className="col-md-6">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Brand</th>
                      <td>{watch.brand}</td>
                    </tr>
                    <tr>
                      <th>Model</th>
                      <td>{watch.name}</td>
                    </tr>
                    <tr>
                      <th>Movement</th>
                      <td>{watch.details?.movement || 'Automatic'}</td>
                    </tr>
                    <tr>
                      <th>Case Material</th>
                      <td>{watch.details?.caseMaterial || 'Stainless steel'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Bezel</th>
                      <td>{watch.details?.bezel || 'Fixed'}</td>
                    </tr>
                    <tr>
                      <th>Water Resistance</th>
                      <td>{watch.details?.waterResistance || '100 meters'}</td>
                    </tr>
                    <tr>
                      <th>Dial</th>
                      <td>{watch.details?.dial || 'Black'}</td>
                    </tr>
                    <tr>
                      <th>Bracelet</th>
                      <td>{watch.details?.bracelet || 'Stainless steel'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
            <ul className="list-group list-group-flush">
              {watch.features.map((feature, index) => (
                <li key={index} className="list-group-item">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-pane fade" id="delivery" role="tabpanel" aria-labelledby="delivery-tab">
            <div className="mb-4">
              <h5>Shipping Information</h5>
              <p>We offer complimentary express shipping on all orders. Your watch will be carefully packaged and fully insured during transit.</p>
              <ul>
                <li>Domestic orders: 1-2 business days</li>
                <li>International orders: 2-5 business days</li>
              </ul>
            </div>
            <div>
              <h5>Returns Policy</h5>
              <p>If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund or exchange. The watch must be unworn, with all original packaging and documentation.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Watches */}
      {similarWatches.length > 0 && (
        <div className="container mb-5">
          <h3 className="section-title mb-4">You May Also Like</h3>
          <div className="row">
            {similarWatches.map(similarWatch => (
              <div className="col-md-3 col-6 mb-4" key={similarWatch._id}>
                <div className="product-card">
                  <Link to={`/watch/${similarWatch._id}`} className="text-decoration-none">
                    <img src={similarWatch.imageUrl} alt={similarWatch.name} className="img-fluid" />
                    <div className="p-3">
                      <p className="product-brand mb-1">{similarWatch.brand}</p>
                      <h5 className="product-title">{similarWatch.name}</h5>
                      <p className="product-price">${similarWatch.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Recently Viewed (would be dynamic in real app) */}
      <div className="container mb-5">
        <h3 className="section-title mb-4">Recently Viewed</h3>
        <div className="row">
          {watchesData.slice(0, 4).map(recentWatch => (
            <div className="col-md-3 col-6 mb-4" key={recentWatch._id}>
              <div className="product-card">
                <Link to={`/watch/${recentWatch._id}`} className="text-decoration-none">
                  <img src={recentWatch.imageUrl} alt={recentWatch.name} className="img-fluid" />
                  <div className="p-3">
                    <p className="product-brand mb-1">{recentWatch.brand}</p>
                    <h5 className="product-title">{recentWatch.name}</h5>
                    <p className="product-price">${recentWatch.price.toLocaleString()}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchDetailPage;
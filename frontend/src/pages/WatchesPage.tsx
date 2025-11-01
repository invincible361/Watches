import React, { useState } from 'react';

// Import watches from our backend data
const watchesData = [
  {
    _id: '1',
    name: 'Submariner',
    brand: 'Rolex',
    price: 8999.99,
    description: 'The Rolex Submariner is a classic diving watch known for its durability and timeless design.',
    imageUrl: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png',
    inStock: true
  },
  {
    _id: '2',
    name: 'Speedmaster Professional',
    brand: 'Omega',
    price: 6299.99,
    description: 'The Omega Speedmaster Professional, also known as the "Moonwatch," was worn by astronauts during the Apollo missions.',
    imageUrl: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-l.png',
    inStock: true
  },
  {
    _id: '3',
    name: 'Royal Oak',
    brand: 'Audemars Piguet',
    price: 25000.00,
    description: 'The Audemars Piguet Royal Oak is an iconic luxury sports watch with its distinctive octagonal bezel and "tapisserie" dial.',
    imageUrl: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/std.png',
    inStock: true
  },
  {
    _id: '4',
    name: 'Nautilus',
    brand: 'Patek Philippe',
    price: 35000.00,
    description: 'The Patek Philippe Nautilus is a highly sought-after luxury sports watch with an elegant porthole-inspired design.',
    imageUrl: 'https://www.patek.com/resources/img/layout/menu/watches/nautilus/5711_1A_001.png',
    inStock: false
  },
  {
    _id: '5',
    name: 'Luminor Marina',
    brand: 'Panerai',
    price: 7900.00,
    description: 'The Panerai Luminor Marina features the iconic crown guard and clean dial design that made the brand famous.',
    imageUrl: 'https://www.panerai.com/content/dam/panerai/products/collections/luminor/pam01312/PAM01312_Front.png',
    inStock: true
  },
  {
    _id: '6',
    name: 'Portugieser Chronograph',
    brand: 'IWC',
    price: 7600.00,
    description: 'The IWC Portugieser Chronograph is known for its clean dial design and precision timing capabilities.',
    imageUrl: 'https://www.iwc.com/content/dam/rcq/iwc/19/58/69/0/1958690.png',
    inStock: true
  },
  {
    _id: '7',
    name: 'Tank',
    brand: 'Cartier',
    price: 3950.00,
    description: 'The Cartier Tank is an elegant rectangular watch that has been an icon of refined taste for over a century.',
    imageUrl: 'https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg',
    inStock: true
  },
  {
    _id: '8',
    name: 'Seamaster Diver 300M',
    brand: 'Omega',
    price: 5200.00,
    description: 'The Omega Seamaster Diver 300M combines professional diving features with elegant design, made famous as James Bond\'s watch.',
    imageUrl: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l.png',
    inStock: true
  }
];

const WatchesPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Get all unique brands
  const brandsSet = new Set(watchesData.map(watch => watch.brand));
  const brands = Array.from(brandsSet);
  
  // Filter watches by selected brand and search query
  const filteredWatches = watchesData
    .filter(watch => selectedBrand ? watch.brand === selectedBrand : true)
    .filter(watch => searchQuery
      ? watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true);
  
  return (
    <div>
      <h1 className="mb-4">Our Watch Collection</h1>
      
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search watches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Filter by Brand</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-2">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="brandFilter" 
                  id="allBrands" 
                  checked={selectedBrand === ''}
                  onChange={() => setSelectedBrand('')}
                />
                <label className="form-check-label" htmlFor="allBrands">
                  All Brands
                </label>
              </div>
              {brands.map(brand => (
                <div className="form-check mb-2" key={brand}>
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="brandFilter" 
                    id={brand} 
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                  />
                  <label className="form-check-label" htmlFor={brand}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-md-9">
          <div className="row">
            {filteredWatches.map(watch => (
              <div className="col-md-4 mb-4" key={watch._id}>
                <div className="card h-100">
                  <img src={watch.imageUrl} className="card-img-top" alt={watch.name} />
                  <div className="card-body">
                    <h5 className="card-title">{watch.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{watch.brand}</h6>
                    <p className="card-text">${watch.price.toLocaleString()}</p>
                    <a href={`/watch/${watch._id}`} className="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchesPage;
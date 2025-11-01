import React from 'react';

// Mock cart data
const cartItems = [
  {
    id: '1',
    name: 'Submariner',
    brand: 'Rolex',
    price: 8999,
    quantity: 1,
    imageUrl: 'https://via.placeholder.com/100x100?text=Rolex'
  },
  {
    id: '3',
    name: 'Carrera',
    brand: 'Tag Heuer',
    price: 3499,
    quantity: 1,
    imageUrl: 'https://via.placeholder.com/100x100?text=TagHeuer'
  }
];

const CartPage: React.FC = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div>
      <h1 className="mb-4">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <a href="/watches">Continue shopping</a>
        </div>
      ) : (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.imageUrl} alt={item.name} className="me-3" style={{ width: '50px', height: '50px' }} />
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <small className="text-muted">{item.brand}</small>
                            </div>
                          </div>
                        </td>
                        <td>${item.price.toLocaleString()}</td>
                        <td>
                          <div className="input-group" style={{ width: '120px' }}>
                            <button className="btn btn-outline-secondary btn-sm">-</button>
                            <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                            <button className="btn btn-outline-secondary btn-sm">+</button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toLocaleString()}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Have a coupon?</h5>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Coupon code" />
                    <button className="btn btn-outline-primary" type="button">Apply</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong>${total.toLocaleString()}</strong>
                  </div>
                  <a href="/checkout" className="btn btn-primary w-100">Proceed to Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Calculate shipping and total
  const shipping = subtotal > 5000 ? 0 : 50;
  const total = subtotal + shipping;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'credit'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Prepare order items
      const orderItems = cartItems.map(item => ({
        watch: item._id,
        quantity: item.quantity
      }));
      
      // Prepare shipping address
      const shippingAddress = {
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country
      };
      
      // Create order object
      const orderData = {
        userId: user?._id || 'guest',
        orderItems,
        shippingAddress,
        paymentMethod: formData.paymentMethod,
        totalPrice: total
      };
      
      // Submit order to backend
      await axios.post('http://localhost:5000/api/orders', orderData);
      
      // Clear cart and redirect to success page
      clearCart();
      alert('Order placed successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error placing order:', err);
      setError('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Checkout</h1>
      
      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <a href="/watches">Continue shopping</a>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger mb-3">{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <h5 className="mb-3">Shipping Information</h5>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-5">
                      <label htmlFor="city" className="form-label">City</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="postalCode" className="form-label">Postal Code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="postalCode" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="country" className="form-label">Country</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="country" 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h5 className="mb-3">Payment Method</h5>
                  
                  <div className="form-check mb-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="credit" 
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleChange}
                      required 
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit Card
                    </label>
                  </div>
                  
                  <div className="form-check mb-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="debit" 
                      value="debit"
                      checked={formData.paymentMethod === 'debit'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit Card
                    </label>
                  </div>
                  
                  <div className="form-check mb-4">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="paypal" 
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                  
                  <button 
                    className="btn btn-primary btn-lg w-100" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">
                    <span>{item.quantity} x {item.name}</span>
                    <span>${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                
                <hr />
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-0">
                  <strong>Total:</strong>
                  <strong>${total.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
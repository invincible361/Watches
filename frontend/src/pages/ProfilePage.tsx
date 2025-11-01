import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Order {
  _id: string;
  createdAt: string;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - would be replaced with API call
    setTimeout(() => {
      setOrders([
        {
          _id: '1',
          createdAt: '2023-05-15T10:30:00Z',
          totalPrice: 299.99,
          isPaid: true,
          isDelivered: false,
          items: [
            { name: 'Classic Chronograph', quantity: 1, price: 299.99 }
          ]
        },
        {
          _id: '2',
          createdAt: '2023-04-20T14:20:00Z',
          totalPrice: 359.98,
          isPaid: true,
          isDelivered: true,
          items: [
            { name: 'Diver Pro', quantity: 1, price: 299.99 },
            { name: 'Watch Winder', quantity: 1, price: 59.99 }
          ]
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">User Profile</h5>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {user?.name || 'John Doe'}</p>
              <p><strong>Email:</strong> {user?.email || 'john@example.com'}</p>
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <h2 className="mb-4">My Orders</h2>
          
          {orders.length === 0 ? (
            <div className="alert alert-info">
              You have no orders yet. <Link to="/watches">Go shopping</Link>
            </div>
          ) : (
            <div className="list-group">
              {orders.map(order => (
                <div key={order._id} className="list-group-item list-group-item-action mb-3">
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <h5 className="mb-1">Order #{order._id}</h5>
                    <small>{formatDate(order.createdAt)}</small>
                  </div>
                  
                  <p className="mb-1">
                    <strong>Total:</strong> ${order.totalPrice.toFixed(2)}
                  </p>
                  
                  <div className="mb-2">
                    <span className={`badge ${order.isPaid ? 'bg-success' : 'bg-danger'} me-2`}>
                      {order.isPaid ? 'Paid' : 'Not Paid'}
                    </span>
                    <span className={`badge ${order.isDelivered ? 'bg-success' : 'bg-warning'}`}>
                      {order.isDelivered ? 'Delivered' : 'Processing'}
                    </span>
                  </div>
                  
                  <div className="small text-muted">
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.quantity} x {item.name} - ${item.price.toFixed(2)}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/order/${order._id}`} className="btn btn-sm btn-outline-primary mt-2">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
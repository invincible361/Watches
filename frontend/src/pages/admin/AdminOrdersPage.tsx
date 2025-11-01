import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Order {
  _id: string;
  user: {
    name: string;
    email: string;
  };
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
}

const AdminOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock data for now - would be replaced with API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrders([
        {
          _id: '1',
          user: {
            name: 'John Doe',
            email: 'john@example.com'
          },
          totalPrice: 299.99,
          isPaid: true,
          isDelivered: false,
          createdAt: '2023-05-15T10:30:00Z'
        },
        {
          _id: '2',
          user: {
            name: 'Jane Smith',
            email: 'jane@example.com'
          },
          totalPrice: 179.99,
          isPaid: true,
          isDelivered: true,
          createdAt: '2023-05-14T14:20:00Z'
        },
        {
          _id: '3',
          user: {
            name: 'Mike Johnson',
            email: 'mike@example.com'
          },
          totalPrice: 499.98,
          isPaid: false,
          isDelivered: false,
          createdAt: '2023-05-16T09:15:00Z'
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
      <h1 className="mb-4">Manage Orders</h1>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>
                  <span className={`badge ${order.isPaid ? 'bg-success' : 'bg-danger'}`}>
                    {order.isPaid ? 'Paid' : 'Not Paid'}
                  </span>
                </td>
                <td>
                  <span className={`badge ${order.isDelivered ? 'bg-success' : 'bg-warning'}`}>
                    {order.isDelivered ? 'Delivered' : 'Pending'}
                  </span>
                </td>
                <td>
                  <Link to={`/admin/orders/${order._id}`} className="btn btn-sm btn-primary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Link to="/admin" className="btn btn-secondary">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AdminOrdersPage;
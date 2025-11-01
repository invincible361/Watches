import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Watch {
  _id: string;
  name: string;
  brand: string;
  price: number;
  inStock: boolean;
}

const AdminWatchesPage: React.FC = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock data for now - would be replaced with API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setWatches([
        {
          _id: '1',
          name: 'Classic Chronograph',
          brand: 'Timex',
          price: 199.99,
          inStock: true
        },
        {
          _id: '2',
          name: 'Diver Pro',
          brand: 'Seiko',
          price: 299.99,
          inStock: true
        },
        {
          _id: '3',
          name: 'Minimalist',
          brand: 'Daniel Wellington',
          price: 179.99,
          inStock: false
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleDeleteWatch = (id: string) => {
    // In a real app, this would make an API call
    setWatches(watches.filter(watch => watch._id !== id));
    alert(`Watch with ID ${id} deleted successfully`);
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Manage Watches</h1>
        <Link to="/admin/watches/new" className="btn btn-success">
          Add New Watch
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watches.map(watch => (
              <tr key={watch._id}>
                <td>{watch.name}</td>
                <td>{watch.brand}</td>
                <td>${watch.price.toFixed(2)}</td>
                <td>
                  <span className={`badge ${watch.inStock ? 'bg-success' : 'bg-danger'}`}>
                    {watch.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td>
                  <div className="btn-group" role="group">
                    <Link to={`/admin/watches/edit/${watch._id}`} className="btn btn-sm btn-primary">
                      Edit
                    </Link>
                    <button 
                      className="btn btn-sm btn-danger ms-1"
                      onClick={() => handleDeleteWatch(watch._id)}
                    >
                      Delete
                    </button>
                  </div>
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

export default AdminWatchesPage;
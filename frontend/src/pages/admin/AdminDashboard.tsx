import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Admin Dashboard</h1>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Watches</h5>
              <p className="card-text">Add, edit, or remove watches from your inventory.</p>
              <Link to="/admin/watches" className="btn btn-primary">
                Manage Watches
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Orders</h5>
              <p className="card-text">View and update order statuses.</p>
              <Link to="/admin/orders" className="btn btn-primary">
                Manage Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
import React from 'react';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Manage Users</h2>
        <ul>
          <Link to="/admin">
          <li className="mb-2">User 1: Admin</li>
          </Link>
          <li className="mb-2">User 2: Officer</li>
          <li className="mb-2">User 2: Controller</li>
          {/* More users here */}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;

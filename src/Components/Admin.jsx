import React, { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState('');
  const correctPasskey = 'admin123';

  const handleLogin = () => {
    if (passkey === correctPasskey) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passkey. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-6">Enter Admin Passkey</h2>
          <input
            type="password"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            placeholder="Enter Passkey"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            <li
              className={`mb-4 cursor-pointer ${activeTab === 'dashboard' ? 'font-bold text-yellow-300' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </li>
            <li
              className={`mb-4 cursor-pointer ${activeTab === 'users' ? 'font-bold text-yellow-300' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              Manage Users
            </li>
            <li
              className={`mb-4 cursor-pointer ${activeTab === 'incidents' ? 'font-bold text-yellow-300' : ''}`}
              onClick={() => setActiveTab('incidents')}
            >
              Incident Reports
            </li>
            <li
              className={`mb-4 cursor-pointer ${activeTab === 'settings' ? 'font-bold text-yellow-300' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              System Settings
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'users' && <ManageUsers />}
        {activeTab === 'incidents' && <IncidentReports />}
        {activeTab === 'settings' && <SystemSettings />}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded p-6">
          <h2 className="text-xl font-bold mb-4">Total Users</h2>
          <p className="text-3xl">1,204</p>
        </div>
        <div className="bg-white shadow-lg rounded p-6">
          <h2 className="text-xl font-bold mb-4">Total Incidents</h2>
          <p className="text-3xl">345</p>
        </div>
        <div className="bg-white shadow-lg rounded p-6">
          <h2 className="text-xl font-bold mb-4">Active Alerts</h2>
          <p className="text-3xl">12</p>
        </div>
      </div>
    </div>
  );
};

const ManageUsers = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', role: 'User', status: 'Active' },
    { id: 2, name: 'John Smith', role: 'Admin', status: 'Inactive' },
    { id: 3, name: 'Emily Davis', role: 'User', status: 'Active' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <span className={`px-2 py-1 rounded ${user.status === 'Active' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                  {user.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="ml-4 text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const IncidentReports = () => {
  const incidents = [
    { id: 1, type: 'SOS Alert', location: 'Downtown', date: '2024-08-17', status: 'Resolved' },
    { id: 2, type: 'Lone Woman', location: 'Central Park', date: '2024-08-16', status: 'Pending' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Incident Reports</h1>
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Type</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map(incident => (
            <tr key={incident.id}>
              <td className="py-2 px-4">{incident.id}</td>
              <td className="py-2 px-4">{incident.type}</td>
              <td className="py-2 px-4">{incident.location}</td>
              <td className="py-2 px-4">{incident.date}</td>
              <td className="py-2 px-4">
                <span className={`px-2 py-1 rounded ${incident.status === 'Resolved' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                  {incident.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SystemSettings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">System Settings</h1>
      <div className="bg-white shadow-lg rounded p-6">
        <h2 className="text-xl font-bold mb-4">Configure Settings</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Notification Frequency</label>
          <select className="w-full border border-gray-300 p-2 rounded mt-2">
            <option value="real-time">Real-Time</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Alert Sensitivity</label>
          <input type="range" min="1" max="100" className="w-full" />
        </div>
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700">Save Changes</button>
      </div>
    </div>
  );
};

export default Admin;

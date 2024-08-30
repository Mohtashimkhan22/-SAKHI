// src/pages/Alerts.js
import React from 'react';

const Alerts = ({alerts}) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Alerts & Incident Management</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Recent Alerts</h2>
        <ul>
          {
            alerts.map((entry,index) => (
              <li className="mb-2 text-red-600 font-semibold" key={index}>Alert {index+1} - {entry.name}</li>
            ))
          }
          {/* <li className="mb-2">Alert 1: Lone woman detected at 22:30</li> */}
          {/* <li className="mb-2">Alert 2: Suspicious gesture detected at 23:00</li> */}
          {/* More alerts here */}
        </ul>
      </div>
    </div>
  );
};

export default Alerts;

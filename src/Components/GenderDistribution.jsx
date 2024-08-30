import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GenderDistribution = () => {

  const data = [
    { name: 'Jan', Men: 4000, Women: 2400 },
    { name: 'Feb', Men: 3000, Women: 1398 },
    { name: 'Mar', Men: 2000, Women: 9800 },
    { name: 'Apr', Men: 2780, Women: 3908 },
    { name: 'May', Men: 1890, Women: 4800 },
    { name: 'Jun', Men: 2390, Women: 3800 },
    { name: 'Jul', Men: 3490, Women: 4300 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mt-14 mb-6">Gender Distribution Analytics</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Gender Trends Over Time</h2>
        <div className="h-64 bg-gray-200">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Men" fill="#235099" />
              <Bar dataKey="Women" fill="#aebdd6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GenderDistribution;

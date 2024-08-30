import React from 'react';
import DonutChart from './DonutChart';
import CameraFeed from './CameraFeed';
import MapView from './MapView';

const Dashboard = ({alerts}) => {

  const data = [
    { name: "Men", value: 12, color: "#aebdd6" },
    { name: "Women", value: 8, color: "#235099" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded">
          <h2 className="text-xl font-bold mb-4">Live Camera Feed</h2>
          <CameraFeed />
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <h2 className="text-xl font-bold mb-4">Gender Distribution</h2>
          <div className="text-lg">Men: {data[0].value} | Women: {data[1].value}</div>
          <DonutChart data={data}/>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <h2 className="text-xl font-bold mb-4">SOS alerts</h2>
          <ul>
            {
              alerts.map((entry,index) => (
                <li className="mb-2" key={index}>Alert {index+1} - {entry.name}</li>
              ))
            }
            
            {/* <li className="mb-2">Alert 2 - SOS gesture detected</li> */}
            <DonutChart data={alerts} />
          </ul>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <h2 className="text-xl font-bold mb-4">Map View</h2>
          <div className="h-64 bg-gray-200">
            <MapView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

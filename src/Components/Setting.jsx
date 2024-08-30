import React, { useState } from 'react';

const Settings = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [alertThreshold, setAlertThreshold] = useState(1);

  const handleSave = () => {
    alert(`Settings saved! Alerts: ${alertsEnabled}, Threshold: ${alertThreshold}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-14">Settings</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Enable Alerts</label>
          <input
            type="checkbox"
            className="mr-2"
            checked={alertsEnabled}
            onChange={(e) => setAlertsEnabled(e.target.checked)}
          /> Enable Notifications
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Alert Threshold</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Number of incidents before alert"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(e.target.value)}
            disabled={!alertsEnabled}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

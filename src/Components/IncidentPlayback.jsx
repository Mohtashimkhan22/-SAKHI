import React from 'react';

const IncidentPlayback = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-14">Incident Playback</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Playback Incident</h2>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <video
            className="w-full h-full rounded"
            controls
            preload="metadata"
          >
            <source src="your-video-file.mp4" type="video/mp4" />
            browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default IncidentPlayback;

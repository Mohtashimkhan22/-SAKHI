import React, { useRef, useEffect } from 'react';

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    startVideo();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline className="h-64 w-full bg-gray-200"></video>
    </div>
  );
};

export default CameraFeed;

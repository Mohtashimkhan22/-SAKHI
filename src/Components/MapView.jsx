import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapView = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadMap = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsMapLoaded(true);
    } catch (error) {
      console.error("Error loading the map: ", error);
    }
  };

  useEffect(() => {
    loadMap();
  }, []);

  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: 29.3461, 
    lng: 79.5519, 
  };

  return isMapLoaded ? (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  ) : (
    <div>Loading map...</div>
  );
};

export default MapView;

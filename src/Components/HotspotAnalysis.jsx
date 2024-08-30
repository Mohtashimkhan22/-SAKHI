import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, HeatmapLayer } from "@react-google-maps/api";

const HotspotAnalytics = () => {
  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: 29.3461, 
    lng: 79.5519, 
  };

  const heatmapOptions = {
    radius: 20,
    opacity: 0.6,
  };

  const onLoad = useCallback((map) => {
    const heatmapData = [
      new window.google.maps.LatLng(37.782, -122.447),
      new window.google.maps.LatLng(37.782, -122.445),
      new window.google.maps.LatLng(37.782, -122.443),
      new window.google.maps.LatLng(37.782, -122.441),
      new window.google.maps.LatLng(37.782, -122.439),
      new window.google.maps.LatLng(37.782, -122.437),
      new window.google.maps.LatLng(37.782, -122.435),
      new window.google.maps.LatLng(37.785, -122.447),
      new window.google.maps.LatLng(37.785, -122.445),
      new window.google.maps.LatLng(37.785, -122.443),
    ];

    const heatmapLayer = new window.google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      ...heatmapOptions,
    });

    heatmapLayer.setMap(map);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-14">Hotspot Analytics</h1>
      <div className="bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Incident Hotspots</h2>
        <div className="h-64 bg-gray-200">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={['visualization']}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
              onLoad={onLoad}
            >
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default HotspotAnalytics;

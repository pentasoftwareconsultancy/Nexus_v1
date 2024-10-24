import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Import marker icon images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LeafletMap = () => {
  const centerPosition = [18.596608, 73.804795]; // Latitude and longitude for the map center

  // Array of multiple locations
  const locations = [
    {
      position: [18.596608, 73.804795],
      popupText: "Nexus Corporate Training Center, Pimple Saudagar"
    },
    {
      position: [18.596608, 73.804795],
      popupText: "Akola"
    },
    {
      position: [18.596608, 73.804795],
      popupText: "Nagpur"
    },
    {
      position: [18.5204, 73.8567],
      popupText: "Amravati"
    },
    {
      position: [19.973966519918175, 73.78741632269774],
      popupText: "Nashik Nexus Corporate Traning Center"
    },
    // Add more locations as needed
  ];

  return (
    <MapContainer center={centerPosition} zoom={10} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            {location.popupText}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;

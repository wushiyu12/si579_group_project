import React from 'react';
import NavBar from '../component/NavBar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const mapView = () => {
    return (
        <div style={{backgroundColor:'#f8f9fa', height:'1000px'}}>
          <div className="text-center py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
            <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the map view</h2>
          </div>
          <NavBar />
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '900px'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                My classroom!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    )
}

export default mapView;

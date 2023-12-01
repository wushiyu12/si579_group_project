import * as React from 'react';
import { useBackPack } from './BackPackContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 


const MapArea = () => {
  const {backpack} = useBackPack();

  return (
      <MapContainer center={[42.277912, -83.734255]} zoom={15} scrollWheelZoom={false} style={{padding:'10%',height: '600px'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {backpack.map((obj, index) => 
            <Marker eventKey={index} key={index} position={[obj['Latitude'],obj['Longitude']]}>
                <Popup>
                    {`${obj['code']} Sec ${obj['Sec']}`}
                </Popup>
            </Marker>
        )}
      </MapContainer>
  )
};
export default MapArea;

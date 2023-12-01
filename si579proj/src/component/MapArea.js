import * as React from 'react';
import { useBackPack } from './BackPackContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
// import { useBackPack } from '../component/BackPackContext';
import Accordion from 'react-bootstrap/Accordion';
import { Button,Card,Col,Row,Container } from 'react-bootstrap';
import CalendarList from '../component/CalendarList';

const MapArea = () => {
  const {backpack, addToBackpack, removeFromBackpack } = useBackPack();

//   useEffect(() => {
//     setData(courseMapping(backpack));
//   }, [backpack])

  return (
      <MapContainer center={[42.277912, -83.734255]} zoom={13} scrollWheelZoom={false} style={{padding:'10%',height: '600px'}}>
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

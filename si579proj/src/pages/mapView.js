import React from 'react';
import NavBar from '../component/NavBar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { useBackPack } from '../component/BackPackContext';
import Accordion from 'react-bootstrap/Accordion';
import { Button,Card,Col,Row,Container } from 'react-bootstrap';
import CalendarList from '../component/CalendarList';
import MapArea from '../component/MapArea';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
  // const { backpack, addToBackpack, removeFromBackpack } = useBackPack();
  //   let unit = 0;
  //   backpack.forEach(course => {
  //       unit += (Number.isInteger(course.Credits) ? course.Credits : 0);
  //   });
  //   const Weekday = {
  //     'M': 'Monday',
  //     'T': 'Tuesday',
  //     'W': 'Wednesday',
  //     'Th': 'Thursday',
  //     'F': 'Friday',
  // }

    return (
        <div style={{backgroundColor:'#f8f9fa', height:'1000px'}}>
          <div className="text-center py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
            <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the map view</h2>
          </div>
          <NavBar />

          {/* <Accordion alwaysOpen>
                {backpack.map((obj, index) => 
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{`${obj['code']} Sec ${obj['Sec']}`}</Accordion.Header>
                        <Accordion.Body>
                            <strong>{obj['Course Title']}</strong>
                            <Button className='bg-danger' onClick={() => removeFromBackpack(obj)}>Remove from backpack</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion> */}

            <Container style={{paddingTop:'2%'}}>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <CalendarList />
                    </Col>
                    <Col xs={12} md={9} lg={9}>
                      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{padding:'10%',height: '900px'}}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                          <Popup>
                            My classroom!
                          </Popup>
                        </Marker>
                      </MapContainer> */}
                      <MapArea/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MapView;

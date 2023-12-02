import React,{ useState } from 'react';
import NavBar from '../component/NavBar';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import {Col,Row,Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useBackPack } from '../component/BackPackContext';
import { Button,Card } from 'react-bootstrap';
import { getTime } from '../util/getTime';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
  const { backpack } = useBackPack();
  const [activePopup, setActivePopup] = useState(null);

    let unit = 0;
    backpack.forEach(course => {
        unit += (Number.isInteger(course.Credits) ? course.Credits : 0);
    });


    const Weekday = {
        'M': 'Monday',
        'T': 'Tuesday',
        'W': 'Wednesday',
        'Th': 'Thursday',
        'F': 'Friday',
    }
    


    return (
        <div style={{backgroundColor:'#f8f9fa', height:'1000px'}}>
          <div className="text-center py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
            <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the map view</h2>
          </div>
          <NavBar />

            <Container style={{paddingTop:'2%'}}>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <Card> 
            <Card.Title className="fs-5 my-2 p-3" >Backpack</Card.Title>
            <p>
                <strong  style={{fontSize: "2em"}}>
                {backpack.length}
                </strong>

                <span style={{ marginRight: "30px"}}>
                    Course
                </span>

                <strong style={{fontSize: "2em"}}>
                    {unit}
                </strong>

                <span>
                    Unit
                </span>
            </p>
            <Accordion alwaysOpen>
                {backpack.map((obj, index) => 
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{`${obj['code']} Sec ${obj['Sec']}`}</Accordion.Header>
                        <Accordion.Body>
                            <strong>{obj['Course Title']}</strong>
                            <br />
                            <strong>Units: </strong>{obj['Credits'] > 4 ? 'TBA' : obj['Credits']}
                            <br />
                            <strong>Have class on: </strong>{JSON.parse(obj['Date'].replace(/'/g, '"')).map((day) => `${Weekday[day]} `)}
                            <br />
                            <strong>Start time: </strong>{getTime(obj['Start'])}
                            <br />
                            <strong>End time: </strong>{getTime(obj['End'])}
                            <br />
                            <strong>Location: </strong>{obj['Room']}
                            <br />
                            <Button className='bg-save' 
                            onClick={() => {
                                setActivePopup(index); // Set the activePopup to the current index
                            }}>Show on map</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Card>
                    </Col>
                    <Col xs={12} md={9} lg={9}>
                      <MapContainer center={[42.277912, -83.734255]} zoom={15} scrollWheelZoom={false} style={{padding:'10%',height: '600px'}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {backpack.map((obj, index) => 
                            <Marker eventKey={index} key={index} position={[obj['Latitude'],obj['Longitude']]}
                            ref={(marker) => {
                                if (marker && activePopup === index) {
                                    marker.openPopup();
                                }
                            }}>
                                <Popup>
                                    {`${obj['code']} Sec ${obj['Sec']}`}
                                    <br />
                                    <strong>Location: </strong>{obj['Room']}
                                </Popup>
                            </Marker>
                        )}
                      </MapContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MapView;

import React from 'react';
import NavBar from '../component/NavBar';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import {Col,Row,Container } from 'react-bootstrap';
import CalendarList from '../component/CalendarList';
import MapArea from '../component/MapArea';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {


    return (
        <div style={{backgroundColor:'#f8f9fa', height:'1000px'}}>
          <div className="text-center py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
            <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the map view</h2>
          </div>
          <NavBar />

            <Container style={{paddingTop:'2%'}}>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <CalendarList />
                    </Col>
                    <Col xs={12} md={9} lg={9}>
                      <MapArea/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MapView;

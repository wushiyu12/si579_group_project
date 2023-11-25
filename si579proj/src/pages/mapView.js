import React from 'react';
import NavBar from '../component/NavBar';

const mapView = () => {
    return (
        <div style={{backgroundColor:'#f8f9fa', height:'1000px'}}>
          <div className="text-center py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
            <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the map view</h2>
          </div>
            {/* <h2>This is the map view</h2> */}
            <NavBar />
        </div>
    )
}

export default mapView;
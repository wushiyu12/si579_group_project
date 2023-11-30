import React from 'react';
import NavBar from '../component/NavBar';
import CourseCardArea from '../component/CourseCardArea';

const listView = () => {
    return (
      <div style={{backgroundColor:'#f8f9fa'}}>
      <div className="text-center  py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
        <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the list view</h2>
      </div>
      <NavBar />
        <CourseCardArea />
      </div>
    );
  }
  
export default listView;

  
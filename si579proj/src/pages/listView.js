import React from 'react';
import NavBar from '../component/NavBar';
import CourseCardArea from '../component/CourseCardArea';

const listView = () => {
    return (
      <>
        <h2>This is the list view</h2>
        <NavBar />
        {/* <CourseCard code={courseList[0]['code']} title={courseList[0]['Course Title']}/> */}
        <CourseCardArea />
      </>
    );
  }
  
  export default listView;
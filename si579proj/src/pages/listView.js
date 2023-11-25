import React from 'react';
import NavBar from '../component/NavBar';
import CourseCardArea from '../component/CourseCardArea';

const listView = () => {
    return (
      <>
      <div class="jumbotron text-center">
        <h2>This is the list view</h2>
      </div>
        <NavBar />
        {/* <CourseCard code={courseList[0]['code']} title={courseList[0]['Course Title']}/> */}
        <CourseCardArea />
      </>
    );
  }
  
export default listView;

  
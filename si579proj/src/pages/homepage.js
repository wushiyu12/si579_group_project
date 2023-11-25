import React from 'react';
import Logo from '../component/Logo';
import ViewLogo from '../component/ViewLogo';
import HomePageSearchBox from '../component/HomePageSearchBox';
import NavBar from '../component/NavBar';
// import PageCard from '../component/pageCard';
// import NavBar from '../component/NavBar';

const homepage = () => {
  return (
    <div style={{backgroundColor:'#f8f9fa'}}>
        <Logo/>
      <NavBar />
      {/* <div className="row mb-3"> */}
        <HomePageSearchBox />
      {/* </div> */}

      {/* <div className="row g-4">
        <div className="col-md-4"> */}
          <ViewLogo 
            pageName='Browse Courses' 
            description='Browse Courses in List view' 
            address='listView' 
            buttonText='Browse Courses' />
        {/* </div>

        <div className="col-md-4"> */}
          <ViewLogo 
            pageName='Plan Out Your Semester' 
            description='Calendar view of your registered courses' 
            address='calendarView' 
            buttonText='Schedule Builder' />
        {/* </div>

        <div className="col-md-4"> */}
          <ViewLogo 
            pageName='Map View' 
            description='View the location of your registered courses' 
            address='mapView' 
            buttonText='See Where to Go' />
        {/* </div> */}
      {/* </div> */}
      {/* to be removed */}
      {/* <PageCard pageName='List View' description='List view of courses.' address='listView' />
      <PageCard pageName='Calendar View' description='Calendar view of courses.' address='calendarView' />
      <PageCard pageName='Map View' description='Map view of courses.' address='mapView' /> */}
    </div>
  )
}

export default homepage;

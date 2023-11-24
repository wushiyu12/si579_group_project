import React from 'react';
import Logo from '../component/Logo';
import ViewLogo from '../component/ViewLogo';
import HomePageSearchBox from '../component/HomePageSearchBox';
// import PageCard from '../component/pageCard';
// import NavBar from '../component/NavBar';

const homepage = () => {
  return (
    <>
      <Logo/>
      <HomePageSearchBox></HomePageSearchBox>
      <ViewLogo pageName = 'Browse Courses' description = " Browse Courses in List view" address = 'listView' buttonText = 'Browse Courses'/>
      <ViewLogo pageName = 'Plan Out Your Semester' description = "Calendar view of your registered courses" address = 'calendarView' buttonText = 'Schedule Builder'/>
      <ViewLogo pageName = 'Map View' description = " View the location of your registered courses" address = 'mapView' buttonText = 'See Where to Go'/>

      {/* to be removed */}
      {/* <PageCard pageName='List View' description='List view of courses.' address='listView' />
      <PageCard pageName='Calendar View' description='Calendar view of courses.' address='calendarView' />
      <PageCard pageName='Map View' description='Map view of courses.' address='mapView' /> */}
    </>
  )
}

export default homepage;
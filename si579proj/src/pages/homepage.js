import React from 'react';
import PageCard from '../component/pageCard';
// import NavBar from '../component/NavBar';

const homepage = () => {
  return (
    <>
      <h2>
        This is the homepage.
      </h2>
      <PageCard pageName='List View' description='List view of courses.' address='listView' />
      <PageCard pageName='Calendar View' description='Calendar view of courses.' address='calendarView' />
      <PageCard pageName='Map View' description='Map view of courses.' address='mapView' />
    </>
  )
}

export default homepage;
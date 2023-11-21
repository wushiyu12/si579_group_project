import React from 'react';
import { Routes, Route } from 'react-router-dom';
import homepage from './pages/homepage';
import listView from './pages/listView';
import mapView from './pages/mapView';
import calendarView from './pages/calendarView';

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={homepage}></Route>
        <Route path='/listView' Component={listView}></Route>
        <Route path='/mapView' Component={mapView}></Route>
        <Route path='/calendarView' Component={calendarView}></Route>
      </Routes>
    </>
  );
}

export default Main;
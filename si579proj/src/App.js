import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import homepage from './pages/homepage';
import listView from './pages/listView';
import mapView from './pages/mapView';
import calendarView from './pages/calendarView';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
// import CourseCard from './component/CourseCard';
// import NavBar from './component/NavBar';
// import CourseCardArea from './component/CourseCardArea';
// import Main from './Main';

const BackPack = createContext([]);

const App = () => {

  return (

    <BackPack.Provider value={[]}>
      <div className="App">
        <Routes>
          <Route path='/' Component={homepage}></Route>
          <Route path='/listView' Component={listView}></Route>
          <Route path='/mapView' Component={mapView}></Route>
          <Route path='/calendarView' Component={calendarView}></Route>
        </Routes>
        {/* <Main /> */}
      </div>
    </BackPack.Provider>
  );
}

export default App;

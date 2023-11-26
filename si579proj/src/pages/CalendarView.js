import Calendar from '../component/Calendar';
import NavBar from '../component/NavBar';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import SearchBar from '../component/SearchBar';
import CourseProfile from '../component/CourseProfile';
import HomePageSearchBox from '../component/HomePageSearchBox';

const CalendarView = () => {
    const [chooseRes, setChooseRes] = useState(null);

    return (
        <div style={{backgroundColor:'#f8f9fa'}}>
            <div className="text-center  py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
                <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the calendar view</h2>
            </div>
            <NavBar />

            {/* <Container>
            <SearchBar setChooseRes = {setChooseRes} renderDropDowm = {true}></SearchBar>
            {chooseRes && <CourseProfile chooseRes = {chooseRes}></CourseProfile>}
            </Container> */}
            <HomePageSearchBox />
            <Calendar />
        </div>
    )
}

export default CalendarView;
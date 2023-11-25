import Calendar from '../component/Calendar';
import NavBar from '../component/NavBar';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import SearchBar from '../component/SearchBar';
import CourseProfile from '../component/CourseProfile';


const CalendarView = () => {
    const [chooseRes, setChooseRes] = useState(null);

    return (
        <>
            <h2>This is the calendar view</h2>
            <NavBar />
            <Container>
            <SearchBar setChooseRes = {setChooseRes} renderDropDowm = {true}></SearchBar>
            {chooseRes && <CourseProfile chooseRes = {chooseRes}></CourseProfile>}
            </Container>
            <Calendar />
        </>
    )
}

export default CalendarView;
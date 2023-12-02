import {courseList} from '../util/course';
import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from 'react-bootstrap/Pagination';
import { getTime } from '../util/getTime';
import { validate } from '../util/validate';


const CourseCardArea = () => {
    const validCourseList = validate(courseList);
    const [courses, setCourses] = useState(validCourseList);
    const [page, setPage] = useState(0) 

    const getDay = (dayString) => {
        dayString = dayString.replace(/'/g, '"');
        // Parse the string to get the array
        let array = JSON.parse(dayString);
        // Join the array elements with a space
        let result = array.join(" ");
        return(result)
    }

    return (
        <>
        <Container>
        <div style={{ width: '800px' }} className='mx-auto p-3 my-3 justify-content-around'>
            <SearchBar setParentRes = {setCourses} renderDropDowm = {false} ></SearchBar>
        </div>
        </Container>

        <Container><div className = "row justify-content-center">

            {/* I have a strong desier to just pass in an obj
            But life is short... */}
            {courses.length === 0 && <div>No Result match your Input!</div>}
            {courses.length !== 0 && courses.slice(24*page,24*(page+1)).map((course, index) => 
                <div className = "col-auto mb3" key = {index} >
                    <CourseCard  
                        code = {`${course['code']} Sec ${course['Sec']}`}
                        title = {course['Course Title']}
                        description = {course['Course Description']} 
                        credits = {course['Credits']}
                        preReq = {course['Current Enforced Prerequisites']}
                        start = {getTime(course["Start"])}
                        end = {getTime(course["End"])}
                        instr = {course["Instr"]}
                        day = {getDay(course["Date"])}
                        room = {course["Room"]}
                    />
                </div>
            )}       
        
        <div className="row">
            <div className="col text-center">
                <Pagination style = {{"justifyContent": "center"}}>
                    {/* dynamicly change the page number based on searched course */}
                    {[...Array(Math.ceil(courses.length/24) > 0 ? Math.ceil(courses.length/24) :1)]
                    .map((_, index) => (
                        <Pagination.Item key={index + 1} active={index === page} 
                                         onClick = {(e) => {setPage(Number(e.target.innerText)-1)}}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>

        </div></Container>

        </>
    )
};
export default CourseCardArea
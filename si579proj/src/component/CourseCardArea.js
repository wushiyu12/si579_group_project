// this courseList will need to be changed in later work with the fetch data
import {courseList} from '../util/course';
import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from 'react-bootstrap/Pagination';


const CourseCardArea = () => {

    const [courses, setCourses] = useState(courseList);
    const [page, setPage] = useState(0) 

    return (
        <>
        <Container>
        <div style={{ width: '800px' }} className='mx-auto p-3 my-3 justify-content-around'>
            <SearchBar setParentRes = {setCourses} renderDropDowm = {false} ></SearchBar>
        </div>
        </Container>

        <Container><div className = "row justify-content-center">

            {courses.length === 0 && <div>No Result!</div>}
            {courses.slice(24*page,24*(page+1)).map((course, index) => 
                <div className = "col-auto mb3" key = {index} >
                    <CourseCard  
                        code = {`${course['code']} Sec ${course['Sec']}`}
                        title = {course['Course Title']}
                        description = {course['Course Description']} 
                        credits = {course['Credits']}
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
                            {console.log(page)}
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
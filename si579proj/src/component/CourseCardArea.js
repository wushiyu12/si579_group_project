// this courseList will need to be changed in later work with the fetch data
import {courseList} from '../util/course';
import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import HomePageSearchBox from '../component/HomePageSearchBox';
import Pagination from 'react-bootstrap/Pagination';

// import CardGroup from 'react-bootstrap/CardGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const CourseCardArea = () => {
//     return (
//         <Container>
//             <Row xs={1} md={2} lg={3}>
//             {courseList.map((course) => <Col><CourseCard code={course['code']} title={course['Course Title']} description={course['Course Description']} /></Col>)}
//             </Row>
//         </Container>
//     )
// };

const CourseCardArea = () => {


    // const [courses, setCourses] = useState(() => {
    //     const saved = localStorage.getItem("my-todo-items");
    //     if (saved) {
    //         return JSON.parse(saved);
    //     }
    //     return [];
    // });

    const [courses, setCourses] = useState(courseList);

    const courseListCP = courseList;

    const [page, setPage] = useState(0) 

    // useEffect(() =>{

    //     // defer the effect of setting the course
    //     // Which will defer the rerender of all cards 
    //     // when no result is founc
    //     const timeOutId = setTimeout(() => {
    //         // combine the effect of it inside
    //         if (courses.length === 0) {
    //             setCourses(courseList);
    //         }
    //     }, 1000);

    //     // clean the time out
    //     // using the return in use effect
    //     return () => clearTimeout(timeOutId);
    // }, [courses])

    return (
        // we need to use the search bar instead of the HomePageSearchBox
        // Since the filtering is achieved using the search bar and courses state
        <>
        <Container>
        <div style={{ width: '800px' }} className='mx-auto p-3 my-3 justify-content-around'>
            <SearchBar setParentRes = {setCourses} renderDropDowm = {false} ></SearchBar>
        </div>
        </Container>


        {/* <HomePageSearchBox /> */}


        <Container><div className = "row justify-content-center">

            {/* force to render if no search results
            {courses.length === 0 && courseListCP.slice(24*page,24*(page+1)).map((course, index) => 
                    <div className = "col-auto mb3" key = {index} >
                        <CourseCard  
                            code = {course['code']} 
                            title = {course['Course Title']} 
                            description = {course['Course Description']} 
                            credits = {course['Credits']}
                        />
                    </div>
                )} */}
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
                    {/* dynamicly change the page number based on searched coursse */}
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
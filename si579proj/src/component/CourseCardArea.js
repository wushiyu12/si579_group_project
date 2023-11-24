// this courseList will need to be changed in later work with the fetch data
import {courseList} from '../util/course';

// a seperate search logic is needed here
// since the list view need to include all related course

import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
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
    const [courses, setCourses] = useState(courseList);
    return (
        <Container><div className = "row justify-content-center">
            {courses.map((course, index) => 
                <div className = "col-auto mb3" key = {course['code']} >
                    <CourseCard  
                        code = {course['code']} 
                        title = {course['Course Title']} 
                        description = {course['Course Description']} 
                        credits = {course['Credits']}
                    />
                </div>
            )}
        </div></Container>
    )
};
export default CourseCardArea
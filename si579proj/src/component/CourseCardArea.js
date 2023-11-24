// this courseList will need to be changed in later work with the fetch data
import {courseList} from '../util/course';

import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
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
    const arr = courses.reduce((item, key, index) => (index % 4 == 0 ? item.push([key]) : item[item.length-1].push(key)) && item, []);
    return (
        <Container>
            {arr.map(group => 
                <Row><CardGroup>
                    {group.map((course,index) => <CourseCard key = {index} code={course['code']} title={course['Course Title']} description={course['Course Description']} credits = {course['Credits']}/>)}
                </CardGroup></Row>
            )}
        </Container>
    )
};
export default CourseCardArea
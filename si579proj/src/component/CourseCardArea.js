import {courseList} from '../util/course';
import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';

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
    const arr = courses.reduce((item, key, index) => (index % 3 == 0 ? item.push([key]) : item[item.length-1].push(key)) && item, []);
    return (
        <Container>
            {arr.map(group => 
                <row><CardGroup>
                    {group.map(course => <CourseCard code={course['code']} title={course['Course Title']} description={course['Course Description']} />)}
                </CardGroup></row>
            )}
        </Container>
    )
};
export default CourseCardArea
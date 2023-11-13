import {courseList} from '../util/course';
import CourseCard from './CourseCard';

const CourseCardArea = () => {
    return (
        <>
            {courseList.map((course) => <CourseCard code={course['code']} title={course['Course Title']} description={course['Course Description']} />)}
        </>
    )
};
export default CourseCardArea
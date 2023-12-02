export const validate = (courses) => {
    let invalid = [];
    for (let i = 0; i < courses.length; i++){
        try {
            let key = courses[i]['Key']
            let code = courses[i]['code']
            let sec = courses[i]['Sec']
            let title = courses[i]['Course Title']
        } catch (error) {
            invalid.push(courses[i])
        }
    }
    return courses.filter((course) => !invalid.includes(course));
};
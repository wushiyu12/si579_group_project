const searchCode = (courseList, searchTerm) => {
    if (!searchTerm.trim()) return [];  // Return empty array if search term is empty or only whitespace
    return courseList
      .filter((course) => 
        (course.code + ' ' + course['Course Title']).toLowerCase().includes(searchTerm.toLowerCase())
      );
  };
  
export{searchCode}
import React, { createContext, useState, useContext } from 'react';

// Create a Context object for the backpack data
const BackPackContext = createContext();

// Create a Provider component to encapsulate the backpack state logic
const BackPackProvider = ({ children }) => {
  // State hook to keep track of the courses in the backpack
  const [backpack, setBackpack] = useState([]);

  // Function to add a new course to the backpack, avoiding duplicates
  const addToBackpack = (newCourse) => {
    setBackpack((currentBackpack) => {
      // Check if the course is already in the backpack
      const isCourseInBackpack = currentBackpack.some(course => course.code === newCourse.code);
      if (!isCourseInBackpack) {
        // how to concat element using ...
        return [...currentBackpack, newCourse];
      } else {
        return currentBackpack;
      }
    });
  };

  // Function to remove a course from the backpack by its id
  const removeFromBackpack = (rmCourse) => {
    setBackpack((currentBackpack) => 
      currentBackpack.filter(course => course.code !== rmCourse.code)
    );
  };

  // The context value that will be supplied to any descendants of this provider
  const value = { backpack, addToBackpack, removeFromBackpack };

  // Render the provider with the value prop to supply the context to its children
  return (
    <BackPackContext.Provider value={value}>
      {children}
    </BackPackContext.Provider>
  );
};

// Create a custom hook to simplify the usage of the backpack context in other components
export {BackPackProvider};
export const useBackPack = () => useContext(BackPackContext);

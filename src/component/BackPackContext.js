import React, { createContext, useState, useContext,useEffect} from 'react';

// Create a Context object for the backpack data
const BackPackContext = createContext();

// Create a Provider component to encapsulate the backpack state logic
const BackPackProvider = ({ children }) => {
  
  // State hook to keep track of the courses in the backpack
  // Initialize the state with data from localStorage if available

  // notice useState take the default value as an arg
  // using the return in arrow function to set to init different value
  const [backpack, setBackpack] = useState(() => {

    let localData = [];
    if(localStorage.getItem('backpack')){
      localData = localStorage.getItem('backpack');
      localData = JSON.parse(localData);
    }

    return localData;
  });


  // using use effect to trigger saving if there is change in backpack
  // hence localstorage will have all we want
  useEffect(() => {
    localStorage.setItem('backpack', JSON.stringify(backpack));
  }, [backpack]);

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

// how to use the context
// just using useBackPack
// for example 
// const { backpack, addToBackpack, removeFromBackpack } = useBackPack();
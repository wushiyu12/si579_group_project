import React from 'react';
import { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import CourseProfile from './CourseProfile';

const SearchCard = () => {

    const [chooseRes, setChooseRes] = useState(null);
    const [dispaly, setDispaly] = useState(true);

    

    // useEffect(() => {

    //     const onClickHandler = (e) => {   
    //         const a = document.querySelector("#root > div > div > div.mx-auto.p-3.my-3.justify-content-around > div > div.shadow.mx-auto.p-3.my-3.card")
            
    //         if (a && e.target !== a){
    //             const btn = document.querySelector("#root > div > div > div.mx-auto.p-3.my-3.justify-content-around > div > div > div > div.col-sm-8 > div.list-group > button")
    //             console.log("a", a);
    //             console.log("e", e.target);
    //             console.log('btn',btn)
    //             setDispaly(false)
    //         }
    //     }
    //     // Add event listener for the whole page
    //     window.addEventListener('click',  onClickHandler);
    
    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener('click', onClickHandler);
    //     };
    //   }, []); 

    return (
        <div style={{ width: '800px' }} className='mx-auto p-3 my-3 justify-content-around'>
        <div>
        <SearchBar setChooseRes = {setChooseRes} renderDropDowm = {true} setDispaly = {setDispaly}></SearchBar>
        {chooseRes && dispaly && <CourseProfile chooseRes = {chooseRes} setDispaly = {setDispaly}></CourseProfile>}
        </div>
        </div>
    );
};

export default SearchCard;

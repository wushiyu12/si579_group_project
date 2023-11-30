import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import CourseProfile from './CourseProfile';

const SearchCard = () => {

    const [chooseRes, setChooseRes] = useState(null);

    return (
        <div style={{ width: '800px' }} className='mx-auto p-3 my-3 justify-content-around'>
        <div>
        <SearchBar setChooseRes = {setChooseRes} renderDropDowm = {true}></SearchBar>
        {chooseRes && <CourseProfile chooseRes = {chooseRes}></CourseProfile>}
        </div>
        </div>
    );
};

export default SearchCard;

import React from 'react';
import {Card, Row, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
// import { useState, useEffect, Context } from 'react';
// import {courseList} from '../util/course';
// import ListGroup from 'react-bootstrap/ListGroup';
import SearchBar from './SearchBar';
import CourseProfile from './CourseProfile';

const SearchCard = () => {

    // const [results, setResults] = useState([])
    // const [inputValue, setInputValue] = useState('');

    // const checkInput = (e) => {
    //     setInputValue(e.target.value);
    //     const filtered = courseList
    //       .filter((course) => course.code.toLowerCase().includes(e.target.value.toLowerCase()))
    //     setResults(filtered)
    // }

    // const chooseResult = (choice) => {
    //     setInputValue(choice);
    //     setResults([]);
    // }

    // const clearResult = () => {
    //     setResults([]);
    // }

    // useEffect(() => {
    //     // Add event listener for the whole page
    //     window.addEventListener('click', clearResult);
    
    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener('click', clearResult);
    //     };
    //   }, []); 

    const [chooseRes, setChooseRes] = useState(null);

    return (
        <Card style={{ width: '67rem' }} className='shadow-lg mx-auto p-3 my-3'>
        <Card.Body>
            <Row>
                <img src="https://yt3.googleusercontent.com/ytc/APkrFKY7Ofoz3DRteo2LvDggtO1FAUcsEa-sGL64SM9aDQ=s900-c-k-c0x00ffffff-no-rj"  
                alt="UM logo" className="img-fluid" style={{ width: '8%' }}>
                </img>
            </Row>
            <Card.Title className="fs-3 page-title" >Search for Courses</Card.Title>
            <Card.Text>
                Look up specific courses offered by the University of Michigan School of Information, Ann Arbor Campus.    
            </Card.Text>


            {/* <InputGroup className="search-bar-container">
                <Form.Control
                type="search"
                value = {inputValue}
                onChange={checkInput}
                placeholder="Search for Course"
                />
            </InputGroup> 
            <ListGroup >
                {results.length >0 && 
                 results.slice(0, 5).map((course, index) => 
                    <ListGroup.Item action key = {index}
                                    onClick={() => chooseResult(course.code)}>
                        {`${course.code} ${course['Course Title']}`}
                    </ListGroup.Item>
                    )}
            </ListGroup> */}

        <SearchBar setChooseRes = {setChooseRes}></SearchBar>
        {chooseRes && <CourseProfile chooseRes = {chooseRes}></CourseProfile>}
        </Card.Body>
        </Card>
    );
};

export default SearchCard;

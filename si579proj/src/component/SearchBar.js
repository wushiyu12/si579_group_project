import React from 'react';
import {Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect, Context } from 'react';
import {courseList} from '../util/course';
import ListGroup from 'react-bootstrap/ListGroup';

// this component take a obj course list as arg
// use props.setChooseRes to pass its choosen res to 
// parent component

const SearchBar = (props) => {

    const [results, setResults] = useState([])
    const [inputValue, setInputValue] = useState('');

    const checkInput = (e) => {
        setInputValue(e.target.value);
        const filtered = courseList
          .filter((course) => course.code.toLowerCase().includes(e.target.value.toLowerCase()))
        setResults(filtered)
    }

    const chooseResult = (choice) => {
        setInputValue(choice.code);
        // the setChooseRes naming need to persist to use
        // the search bar will replace the other ones in nav bar
        props.setChooseRes(choice)
        setResults([]);
    }

    const clearResult = () => {
        setResults([]);
    }

    useEffect(() => {
        // Add event listener for the whole page
        window.addEventListener('click', clearResult);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('click', clearResult);
        };
      }, []); 


    return(
        <>
        <InputGroup className="search-bar-container">
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
                                    onClick={() => chooseResult(course)}>
                        {`${course.code} ${course['Course Title']}`}
                    </ListGroup.Item>
                    )}
            </ListGroup>
        </>
    );
}

export default SearchBar;
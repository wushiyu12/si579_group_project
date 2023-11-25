import React from 'react';
import {Form, Row, Col, InputGroup, Dropdown,ListGroup,Container} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import {courseList} from '../util/course';
import { searchCode } from '../util/searchCode';
import { searchDes } from '../util/searchDes';

// this component take a obj course list as arg
// use props.setChooseRes to pass its choosen res to 
// parent component

const SearchBar = (props) => {

    const [results, setResults] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [searchMod, setSearchMod] = useState('searchCode');

    const handleSelect  = (eventKey) => {
        setSearchMod(eventKey);
    }

    const checkInput = (e) => {
        // setInputValue(e.target.value);
        // const filtered = courseList
        //   .filter((course) => (course.code + course['Course Title']).toLowerCase().includes(e.target.value.toLowerCase()))
        // setResults(filtered)

        // notice use e.target.value here
        // the value change will happen in the next render cycle we need to
        // use useEffect
        // setInputValue(e.target.value);
        // if (searchMod === 'searchCode'){
        //     setResults(searchCode(courseList, e.target.value));
        // }
        // else{
        //     setResults([])
        // }
        setInputValue(e.target.value);
    }

    // Reacts to changes in inputValue and searchMod
    useEffect(() => {
        if (searchMod === 'searchCode') {
            setResults(searchCode(courseList, inputValue));
        } else {
            setResults(searchDes(courseList, inputValue));
        }
    }, [inputValue, searchMod]); 

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
        <Container>
        <Row>

        <Col sm={8}>
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
        </Col>

        <Col sm={'auto'}>
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {searchMod === 'searchCode' ? "Search by Code" : "Search by Description"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {/* {searchMod} will be changed later  */}
                <Dropdown.Item eventKey="searchCode">Seacrch by Name</Dropdown.Item>
                <Dropdown.Item eventKey="searchDes">Seacrch by Description</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Col>

        </Row>
        </Container>
        
    );
}

export default SearchBar;
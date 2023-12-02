import React from 'react';
import {Form, Row, Col, InputGroup, Dropdown,ListGroup,Container} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import {courseList} from '../util/course';
import { searchCode } from '../util/searchCode';
import { searchDes } from '../util/searchDes';
import { validate } from '../util/validate';

// this component take a obj course list as arg
// use props.setChooseRes to pass its choosen res to 
// parent component

const SearchBar = (props) => {
    const validCourseList = validate(courseList);
    const [results, setResults] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [searchMod, setSearchMod] = useState('searchCode');

    const handleSelect  = (eventKey) => {
        setSearchMod(eventKey);
    }

    const checkInput = (value) => {
        setInputValue(value);
    }

    // reset the parent display 
    // after a single user input
    const handelCloseReset  = () => {
        if (props.setDisplay){
        props.setDisplay(true);}
      }

    // Reacts to changes in inputValue and searchMod
    // using props.setParentRes to save all match obj in an Array

    useEffect(() => {
        if (searchMod === 'searchCode') {
            const temp = searchCode(validCourseList, inputValue);
            setResults(temp);
            if (props.setParentRes){
                props.setParentRes(temp);
            }
        } else {
            const temp = searchDes(validCourseList, inputValue);
            setResults(temp);
            if (props.setParentRes){
                props.setParentRes(temp)
            }
        }
        if (inputValue.length === 0 && props.setParentRes) {
            setResults(validCourseList);
            props.setParentRes(validCourseList);
        }
    }, [inputValue, searchMod]); 


    // using props.setChooseRes to save the user clicked element
    
    const chooseResult = (choice) => {
        setInputValue(choice.code);
        // the setChooseRes naming need to persist to use
        // the search bar will replace the other ones in nav bar
        if(props.setChooseRes){
            props.setChooseRes(choice)
        }
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

            // reset the display after user input
            onChange={(e) => {
                checkInput(e.target.value);
            }
            }
            placeholder="Search for Course"
            />
        </InputGroup> 

        {props.renderDropDowm &&
        <ListGroup >
            {results.length >0 && 
             results.slice(0, 5).map((course, index) => 
                <ListGroup.Item action key = {index}
                                onClick={() => {chooseResult(course);
                                                handelCloseReset();
                                }}>
                    {`${course.code} Sec ${course['Sec']} ${course['Course Title']}`}
                </ListGroup.Item>
            )}
        </ListGroup>
        }
        </Col>
        
        
        <Col sm={'auto'}>
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {searchMod === 'searchCode' ? "Search by Name" : "Search by Description"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
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
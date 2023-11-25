import React from 'react';
import {Card, Row} from 'react-bootstrap';
import { useState } from 'react';
import SearchBar from './SearchBar';
import CourseProfile from './CourseProfile';

const SearchCard = () => {

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


        <SearchBar setChooseRes = {setChooseRes} renderDropDowm = {true}></SearchBar>
        {chooseRes && <CourseProfile chooseRes = {chooseRes}></CourseProfile>}
        </Card.Body>
        </Card>
    );
};

export default SearchCard;

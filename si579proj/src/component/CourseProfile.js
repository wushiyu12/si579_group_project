import React, { useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
import { useBackPack } from './BackPackContext';

const CourseProfile = (props) => {

  // call use useBackPack function and it will return
  // <BackPackContext.Provider value={value}>
  // const value = { backpack, addToBackpack, removeFromBackpack };

  const { backpack, addToBackpack, removeFromBackpack } = useBackPack();

  return (
    <Card  className='shadow mx-auto p-3 my-3'>
      <Card.Header className="text-start " > Course Profile </Card.Header>
      <Card.Title className="fs-5 text-start my-2">{props.chooseRes.code}</Card.Title>
      <Card.Title className="fs-4 course-profile" >{props.chooseRes["Course Title"]}</Card.Title>
      <Card.Text className= "text-start" >{props.chooseRes["Course Description"]}</Card.Text>
      <Card.Title className="fs-5 text-start">{`Current Enforced Prerequisites : ${props.chooseRes["Current Enforced Prerequisites"]}`}</Card.Title>
      <Card.Title className="fs-5 text-start">{`Credits : ${props.chooseRes["Credits"]}`}</Card.Title>
      {/* align the button to left */}
      <div className="text-start">
          <Button variant="primary" 
            onClick={() => {
              addToBackpack(props.chooseRes);
              console.log(backpack);
            }}> 
            Add to Backpack
          </Button>
      </div>
    </Card>

  );
};

export default CourseProfile;

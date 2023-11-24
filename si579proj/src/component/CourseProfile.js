import React from 'react';
import {Card} from 'react-bootstrap';

const CourseProfile = (props) => {
  return (
    <Card  className='shadow mx-auto p-3 my-3'>
      <Card.Header className="text-start" > Course Profile </Card.Header>
      <Card.Title className="fs-5 text-start">{props.chooseRes.code}</Card.Title>
      <Card.Title className="fs-4 course-profile" >{props.chooseRes["Course Title"]}</Card.Title>
      <Card.Text className= "text-start" >{props.chooseRes["Course Description"]}</Card.Text>
      <Card.Title className="fs-5 text-start">{`Current Enforced Prerequisites : ${props.chooseRes["Current Enforced Prerequisites"]}`}</Card.Title>
      <Card.Title className="fs-5 text-start">{`Credits : ${props.chooseRes["Credits"]}`}</Card.Title>
    </Card>

  );
};

export default CourseProfile;

import React from 'react';
import {Card, Button,CloseButton} from 'react-bootstrap';
import {useBackPack } from './BackPackContext';
import {getTime} from '../util/getTime';

const CourseProfile = (props) => {

  const { backpack, addToBackpack, removeFromBackpack } = useBackPack();

  const checkInBackpack = backpack.some(obj => {
    return obj['code'] == props.chooseRes['code'];
  });

  const handelCloseClick  = () => {
    if(props.setDisplay){
    props.setDisplay(false);
    }
  }

  const displayCredits = props.chooseRes.Credits > 4 ? 'TBA' : props.chooseRes.Credits;
  const displayDateArray = JSON.parse(props.chooseRes.Date.replace(/'/g, '"'))
  
  return (
    <Card  className='shadow mx-auto p-3 my-3'>
      <Card.Header className="text-start " > 
        Course Profile 
        <CloseButton style= { {position: "absolute", top: "20px", right: "20px"}} onClick={handelCloseClick}/> 
      </Card.Header>
      <Card.Title className="fs-5 text-start my-2">{props.chooseRes.code}</Card.Title>
      <Card.Title className="fs-4 course-profile" >{props.chooseRes["Course Title"]}</Card.Title>
      <Card.Text className= "text-start" >{props.chooseRes["Course Description"]}</Card.Text>
      <Card.Title className="fs-5 text-start">{`Current Enforced Prerequisites : ${props.chooseRes["Current Enforced Prerequisites"]}`}</Card.Title>
      <Card.Title className="fs-5 text-start">{`Credits : ${displayCredits}`}</Card.Title>
      <Card.Title className="fs-5 text-start">
        Time:
        {displayDateArray.map((item, index) => <span key={index}>{`${item} `}</span>)}
        From:{getTime(props.chooseRes.Start)} To:{getTime(props.chooseRes.End)}
      </Card.Title>
      {/* align the button to left */}

      <div className="text-start">
          <Button variant="primary" className={`bg-${checkInBackpack?'danger':'safe'}`}
            onClick={() => {
              if (!checkInBackpack){
                addToBackpack(props.chooseRes);
              } else{
                removeFromBackpack(props.chooseRes);
              }
            }}> 
            {checkInBackpack?'Remove from Backpack':'Add to Backpack'}
          </Button>
      </div>
    </Card>

  );
};

export default CourseProfile;

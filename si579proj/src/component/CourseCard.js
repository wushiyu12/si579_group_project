import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const CourseCard = (props) => {
    // return ("I will be card,one day,one day,one....");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Card style={{ width: '24rem'}}>
          <Card.Img variant="top" src="https://yt3.googleusercontent.com/ytc/APkrFKY7Ofoz3DRteo2LvDggtO1FAUcsEa-sGL64SM9aDQ=s900-c-k-c0x00ffffff-no-rj" />
          <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <Card.Title>{props.code}</Card.Title>
              <Card.Text>
                {props.title}
              </Card.Text>
            </div>
            <div style={{marginTop: '12px'}}>
              <Button variant="primary" onClick={handleShow}>See Course Description</Button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.description}
                </Offcanvas.Body>
            </Offcanvas>
          </Card.Body>
        </Card>
      );
};

export default CourseCard;
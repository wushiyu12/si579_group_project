import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const CourseCard = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const displayCredits = props.credits > 4 ? 'TBA' : props.credits;
    const customOffcanvasStyles = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%', // Adjust width as needed
      maxHeight: '90vh',
      overflowY: 'auto'
  };

    return (
        <div style={{ width: '20rem', height: '11rem', backgroundColor:'white', borderRadius:'5%', padding:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} className=' mx-1 my-1 border'>
          
            <div>
              <div style={{fontSize: 18, backgroundColor:'#f8f9fa',height:'45px', paddingTop:'10px', color:'#0d47a1', fontWeight:'bold'}} className="justify-content-center">{props.code}</div>
              <div style={{fontSize: 15}}>
                {props.title}
                <br />
                <strong>Units: </strong>{displayCredits}
              </div>
            </div>
            <div >
              <Button style={{backgroundColor:'#1e88e5', width:'300px', height:'30px', display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'60px'}} variant="primary" onClick={handleShow}><div style={{fontWeight:'bold'}}>See Course Description</div></Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} style={customOffcanvasStyles}>

              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{fontWeight:'bold'}}>{`${props.code} ${props.title}`}</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Header className='py-0'>
                <Offcanvas.Title >{` Instructor: ${props.instr}`}</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Header className='py-0'>
                <Offcanvas.Title > Prerequisite: {props.preReq === null ? "None" : props.preReq}</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Header className='py-0'>
                <Offcanvas.Title> Location: {props.room}</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Header className='py-0'>
                <Offcanvas.Title> {` Time: ${props.day} ${props.start} ~ ${props.end}`}</Offcanvas.Title>
              </Offcanvas.Header>

                <Offcanvas.Body>
                    {props.description}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
      );
};

export default CourseCard;
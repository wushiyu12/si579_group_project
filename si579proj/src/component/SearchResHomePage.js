// This component still need work on


import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const CourseProfileComponent = () => {
  return (
    <Container className="card-container">
      <Row className="course-top-section">
        <Col className="course-top-section-left">
          <div className="logo">
            <img src="https://yt3.googleusercontent.com/ytc/APkrFKY7Ofoz3DRteo2LvDggtO1FAUcsEa-sGL64SM9aDQ=s900-c-k-c0x00ffffff-no-rj"  
                alt="UM logo" className="img-fluid" style={{ width: '8%' }}>
            </img>
          </div>
          <div className="course-container">
            <div className="profile-title">
              This is title
            </div>
            <div className="course-overview-container">
              This is description
            </div>
            <div className="advisory-notes">
              {/* Credits, Repeatability, Prerequisites, etc. */}
            </div>
          </div>
        </Col>
        <Col className="course-top-section-right">
          {/* Bookmark and other right side content */}
        </Col>
      </Row>
    </Container>
  );
};

export default CourseProfileComponent;

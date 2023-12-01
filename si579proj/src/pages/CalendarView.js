import Calendar from '../component/Calendar';
import CalendarList from '../component/CalendarList';
import NavBar from '../component/NavBar';
import HomePageSearchBox from '../component/HomePageSearchBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CalendarView = () => {
    return (
        <div style={{backgroundColor:'#f8f9fa'}}>
            <div className="text-center  py-3" style={{height:'100px',backgroundColor: '#1565c0'}}>
                <h2 style={{fontSize:30, fontWeight:'bold', paddingTop:'2%', color:'white'}}>This is the calendar view</h2>
            </div>
            <NavBar />
            <HomePageSearchBox />
            <Container>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <CalendarList />
                    </Col>
                    <Col xs={12} md={9} lg={9}>
                        <Calendar />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CalendarView;
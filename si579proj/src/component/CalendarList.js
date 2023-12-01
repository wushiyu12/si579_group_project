import Accordion from 'react-bootstrap/Accordion';
import { useBackPack } from './BackPackContext';
import { Button,Card } from 'react-bootstrap';
import { getTime } from '../util/getTime';

const CalendarList = () => {
    const { backpack, removeFromBackpack } = useBackPack();
    let unit = 0;
    backpack.forEach(course => {
        unit += (Number.isInteger(course.Credits) ? course.Credits : 0);
    });


    const Weekday = {
        'M': 'Monday',
        'T': 'Tuesday',
        'W': 'Wednesday',
        'Th': 'Thursday',
        'F': 'Friday',
    }


    return (
        <>
        <Card> 
            <Card.Title className="fs-5 my-2 p-3" >Backpack</Card.Title>
            <p>
                <strong  style={{fontSize: "2em"}}>
                {backpack.length}
                </strong>

                <span style={{ marginRight: "30px"}}>
                    Course
                </span>

                <strong style={{fontSize: "2em"}}>
                    {unit}
                </strong>

                <span>
                    Unit
                </span>
            </p>
            <Accordion alwaysOpen>
                {backpack.map((obj, index) => 
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{`${obj['code']} Sec ${obj['Sec']}`}</Accordion.Header>
                        <Accordion.Body>
                            <strong>{obj['Course Title']}</strong>
                            <br />
                            <strong>Units: </strong>{obj['Credits'] > 4 ? 'TBA' : obj['Credits']}
                            <br />
                            <strong>Have class on: </strong>{JSON.parse(obj['Date'].replace(/'/g, '"')).map((day) => `${Weekday[day]} `)}
                            <br />
                            <strong>Start time: </strong>{getTime(obj['Start'])}
                            <br />
                            <strong>End time: </strong>{getTime(obj['End'])}
                            <br />
                            <strong>Location: </strong>{obj['Room']}
                            <br />
                            <Button className='bg-danger' onClick={() => removeFromBackpack(obj)}>Remove from backpack</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Card>
        </>
    )
};
export default CalendarList;
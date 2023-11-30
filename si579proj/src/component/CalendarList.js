import Accordion from 'react-bootstrap/Accordion';
import { useBackPack } from './BackPackContext';
import { Button } from 'react-bootstrap';
// import { useState, useEffect } from 'react';

const CalendarList = () => {
    const { backpack, addToBackpack, removeFromBackpack } = useBackPack();
    // const [scrollY, setScrollY] = useState(0);
    // const test = () => {console.log(backpack)}
    const Weekday = {
        'M': 'Monday',
        'T': 'Tuesday',
        'W': 'Wednesday',
        'Th': 'Thursday',
        'F': 'Friday',
    }

    const getTime = (timestamp) => {
        const temp = new Date(timestamp);
        const date = new Date(new Date(temp.setDate(temp.getDate())).toLocaleString('en-US', {timeZone: 'GMT'}))
        return `${date.getHours() < 10? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes()}:${date.getSeconds() < 10? `0${date.getSeconds()}` : date.getSeconds()}`;
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };
    //     handleScroll();

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //         // console.log(scrollY);
    //     };
    // }, [scrollY]);

    return (
        <>
        {/* <div style={{ marginTop: `${scrollY / 16}rem`, height: '50vh', border: 'dashed 1px'}}> */}
        <div>
            Backpack
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
        </div>
        </>
    )
};
export default CalendarList;
import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  AppointmentTooltip,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useBackPack } from './BackPackContext';

const Calendar = () => {
  const getTime = (day, timestamp) => {
    const date = new Date(timestamp);
    let offset = 0;
    if (day === "M"){
      offset = -5;
    } else if (day === "T"){
      offset = -4;
    } else if (day === "W"){
      offset = -3;
    } else if (day === "Th"){
      offset = -2;
    } else{
      offset = -1;
    }
    return new Date(new Date(date.setDate(date.getDate() + offset)).toLocaleString('en-US', {timeZone: 'GMT'}));
  }

  const courseMapping = (courses) => {
    const weekdays = courses.map((course, index) => JSON.parse(course['Date'].replace(/'/g, '"')));
    let res = [];
    for (let i = 0; i < courses.length; i++){
      for (let j = 0; j < weekdays[i].length; j++){
        res.push(({
          title: `${courses[i]['code']} Sec ${courses[i]['Sec']}`,
          startDate: new Date(getTime(weekdays[i][j], courses[i]['Start'])),
          endDate: new Date(getTime(weekdays[i][j], courses[i]['End']))
        }))
      }
    }
    return res;
  }
  const {backpack} = useBackPack();
  const [data, setData] = useState(courseMapping(backpack));
  const [currentViewName, setCurrentViewName] = useState('Week');

  useEffect(() => {
    setData(courseMapping(backpack));
  }, [backpack])

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingBottom:'10px'}}>
      <Paper style={{width: '90%'}}>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2023-11-30"
            currentViewName={currentViewName}
            onCurrentViewNameChange={setCurrentViewName}
          />
          <WeekView
            startDayHour={8}
            endDayHour={21}
            cellDuration={60}

          />
          <Appointments />
          <AppointmentTooltip
            showCloseButton
          />
        </Scheduler>
      </Paper>
    </div>
  )
};
export default Calendar;

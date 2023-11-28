import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  // DayView,
  WeekView,
  // MonthView,
  // Toolbar,
  // DateNavigator,
  AppointmentTooltip,
  // ViewSwitcher,
  Appointments,
  // TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useBackPack } from './BackPackContext';

const Calendar = () => {
  const getTime = (weekday, timestamp) => {
    const date = new Date(timestamp);
    const day = JSON.parse(weekday.replace(/'/g, '"'))[0];
    let offset = 0;
    if (day === "M"){
      offset = -5;
    } else if (day === "T"){
      offset = -4;
    } else if (day === "W"){
      offset = -3;
    } else if (day === "Th"){
      offset = -2;
    } else if (day === "F"){
      offset = -1;
    } else{
      offset = 1;
    }
    return date.setDate(date.getDate() + offset);
  }

  const courseMapping = (courses) => {
    return courses.map((course, index) => ({
      title: `${course['code']} Sec ${course['Sec']}`,
      startDate: new Date(getTime(course['Date'], course['Start'])),
      endDate: new Date(getTime(course['Date'], course['End']))
    }))
  }
  const { backpack, addToBackpack, removeFromBackpack } = useBackPack();
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
          // height={660}
        >
          <ViewState
            defaultCurrentDate="2023-11-23"
            currentViewName={currentViewName}
            onCurrentViewNameChange={setCurrentViewName}
          />
          <WeekView
            startDayHour={7.5}
            endDayHour={21.5}
          />
          {/* <MonthView /> */}
          {/* <DayView /> */}
          {/* <Toolbar /> */}
          {/* <ViewSwitcher /> */}
          {/* {currentViewName === 'Day' && <DateNavigator />} */}
          {/* <TodayButton /> */}
          <Appointments />
          <AppointmentTooltip
            showCloseButton
          //   showOpenButton
          />
        </Scheduler>
      </Paper>
    </div>
  )
};
export default Calendar;

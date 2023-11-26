import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  // MonthView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  ViewSwitcher,
  Appointments,
  // TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointments';


const Calendar = () => {
  const [data, setData] = useState(appointments);
  const [currentViewName, setCurrentViewName] = useState('Week');

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingBottom:'10px'}}>
      <Paper style={{width: '90%'}}>
        <Scheduler
          data={data}
          // height={660}
        >
          <ViewState
            defaultCurrentDate="2018-07-27"
            currentViewName={currentViewName}
            onCurrentViewNameChange={setCurrentViewName}
          />
          <WeekView
            startDayHour={7.5}
            endDayHour={21.5}
          />
          {/* <MonthView /> */}
          <DayView />
          <Toolbar />
          <ViewSwitcher />
          {currentViewName === 'Day' && <DateNavigator />}
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

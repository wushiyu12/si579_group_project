import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  ViewSwitcher,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../component/appointments';

import NavBar from '../component/NavBar';

export default class calendarView extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: appointments,
        currentViewName: 'work-week',
      };

      this.currentViewNameChange = (currentViewName) => {
        this.setState({ currentViewName });
      };
    }
  
    render() {
      const { data, currentViewName } = this.state;

      return (
        <>
            <h2>This is the calendar view</h2>
            <NavBar />
            <Paper>
              <Scheduler
                data={data}
                // height={660}
              >
                <ViewState
                  defaultCurrentDate="2018-07-27"
                  currentViewName={currentViewName}
                  onCurrentViewNameChange={this.currentViewNameChange}
                />
                <WeekView
                  startDayHour={10}
                  endDayHour={19}
                />
                <WeekView
                  name="work-week"
                  displayName="Work Week"
                  excludedDays={[0, 6]}
                  startDayHour={9}
                  endDayHour={19}
                />
                <MonthView />
                <DayView />
                <Toolbar />
                <ViewSwitcher />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <AppointmentTooltip
                  showCloseButton
                //   showOpenButton
                />
              </Scheduler>
            </Paper>
        </>
      );
    }
}

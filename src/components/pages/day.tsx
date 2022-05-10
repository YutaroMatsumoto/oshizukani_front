import "twin.macro";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { BaseTemplate } from "src/components/templates/BaseTemplate";
const localizer = momentLocalizer(moment);

const Day = () => {
  return (
    <BaseTemplate>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </BaseTemplate>
  );
};

export default Day;

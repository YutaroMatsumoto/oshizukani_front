import "twin.macro";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import { BaseTemplate } from "src/components/templates/BaseTemplate";

const Day = () => {
  return (
    <BaseTemplate>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </BaseTemplate>
  );
};

export default Day;

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/v1/events.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let events = data;
        for (let i = 0; i < events.length; i++) {
          events[i].start = moment
            .utc(events[i].start)
            // .add(1, "hours")
            .toDate();
          events[i].finish = moment
            .utc(events[i].end)
            // .add(1, "hours")
            .toDate();
        }
        setEvents(events);
      });
  }, []);

  // const now = new Date();

  return (
    <div>
      <p>Calendar in React.</p>
      <div style={{ height: "500pt" }}>
        <Calendar
          popup
          selectable
          onSelectEvent={(event) => alert(event.name)}
          events={events}
          titleAccessor="name"
          startAccessor="start"
          endAccessor="finish"
          defaultDate={moment().toDate()}
          localizer={localizer}
        />
      </div>
    </div>
  );
}
export default MyCalendar;

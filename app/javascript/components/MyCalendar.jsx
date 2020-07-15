import React, { useState, useEffect, useLayoutEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useLayoutEffect(() => {
    fetch("/api/v1/events.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let ev = data;
        for (let i = 0; i < events.length; i++) {
          ev[i].start = moment(ev[i].start).toDate();
          ev[i].finish = moment(ev[i].end).toDate();
        }
        setEvents(ev);
      });
  }, []);

  // const now = new Date();
  return (
    <>
      <div style={{ height: "80vh" }}>
        <Calendar
          selectable
          onSelectEvent={(event) => {
            window.location.href = `http://localhost:3000/events/${event.id}`;
          }}
          events={events}
          titleAccessor="name"
          startAccessor="start"
          endAccessor="finish"
          defaultDate={new Date()}
          localizer={localizer}
          views={["month"]}
          defaultView="month"
        />
      </div>
    </>
  );
};
export default MyCalendar;

import React, { useState, useEffect } from "react";
import AllEvents from "./AllEvents";
import NewEvent from "./NewEvent";
import MyCalendar from "./MyCalendar";

const Body = () => {
  const [events, setEvents] = useState([]);

  const handleFormSubmit = (name, description, start, finish) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    let body = JSON.stringify({
      event: {
        name: name,
        description: description,
        start: start,
        finish: finish,
      },
    });

    fetch("http://localhost:3000/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token,
      },
      redirect: "error",
      body: body,
    })
      .then((response) => {
        return response.json();
      })

      .then((event) => {
        addNewEvent(event);
      });
  };

  const addNewEvent = (event) => {
    // setEvents(events.concat(event));
    setEvents([...events, event]);
  };

  const handleDelete = (id) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(`http://localhost:3000/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token,
      },
    }).then(() => {
      deleteEvent(id);
    });
  };

  const deleteEvent = (id) => {
    let untouchedEvents = events.filter((event) => event.id !== id);
    setEvents(untouchedEvents);
  };

  const handleUpdate = (event) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
      method: "PUT",
      body: JSON.stringify({ event: event }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token,
      },
    }).then(() => {
      updateEvent(event);
    });
  };

  const updateEvent = (event) => {
    let updatedEvents = events.filter((f) => f.id !== event.id);
    updatedEvents.push(event);
    setEvents(updatedEvents);
  };

  useEffect(() => {
    fetch("/api/v1/events.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div>
      <NewEvent handleFormSubmit={handleFormSubmit} />
      <MyCalendar />
      <div className="my-5">
        <p className="text-muted mb-3">All events:</p>
        <AllEvents
          events={events}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import Event from "./Event";

const AllEvents = (props) => {
  let events = props.events.map((event) => {
    return (
      <div key={event.id}>
        <h1>{event.name}</h1>
        <p>{event.description}</p>

        <Event
          event={event}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}
        />
      </div>
    );
  });

  return <div>{events}</div>;
};

export default AllEvents;

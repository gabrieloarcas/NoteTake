import React from "react";
import Event from "./Event";

const AllEvents = (props) => {
  let events = props.events.map((event) => {
    return (
      <div key={event.id}>
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

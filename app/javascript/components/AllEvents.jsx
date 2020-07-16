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

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-row scroll">{events}</div>
      </div>
    </div>
  );
};

export default AllEvents;

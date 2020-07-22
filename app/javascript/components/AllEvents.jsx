import React from "react";
import Event from "./Event";

const AllEvents = ({ events, handleDelete, handleUpdate }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-row scroll">
          {events.map((event) => {
            return (
              <div key={event.id}>
                <Event
                  event={event}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

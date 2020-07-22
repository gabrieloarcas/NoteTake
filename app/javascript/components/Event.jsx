import React, { useState } from "react";
import moment from "moment";

const Event = (props) => {
  const [edit, setEdit] = useState(false);

  const timeFormat = (eventTime) => {
    return moment(new Date(eventTime)).format("MM-DD, hh:mm A");
  };

  const handleEdit = () => {
    if (edit) {
      let id = props.event.id;
      let event = {
        id: id,
        name: name.value,
        description: description.value,
        start: start.value,
        finish: finish.value,
      };
      props.handleUpdate(event);
    }
    setEdit(!edit);
  };

  let name = edit ? (
    <input
      className="form-control m-1"
      type="text"
      ref={(input) => (name = input)}
      defaultValue={props.event.name}
    />
  ) : (
    <p>{props.event.name}</p>
  );
  let description = edit ? (
    <input
      className="form-control m-1"
      type="text"
      ref={(input) => (description = input)}
      defaultValue={props.event.description}
    />
  ) : (
    <p className="custom-description">{props.event.description}</p>
  );
  let start = edit ? (
    <input
      className="form-control m-1"
      type="text"
      ref={(input) => (start = input)}
      defaultValue={timeFormat(props.event.start)}
    />
  ) : (
    <small>{timeFormat(props.event.start)}</small>
  );
  let finish = edit ? (
    <input
      className="form-control m-1"
      type="text"
      ref={(input) => (finish = input)}
      defaultValue={timeFormat(props.event.finish)}
    />
  ) : (
    <small>{timeFormat(props.event.finish)}</small>
  );
  return (
    <div className="card m-1 shadow-sm" style={{ width: "17.1rem" }}>
      <div className="card-body">
        <h5 className="card-title text-info-custom">{name}</h5>
        <span className="card-text">
          {start} {finish}
        </span>
        <span className="card-text">{description}</span>

        {/* <span className="card-text">{finish}</span> */}

        <div>
          <button className="btn btn-light mt-2" onClick={() => handleEdit()}>
            {edit ? "Submit" : "Edit"}
          </button>
          <button
            className="btn btn-light mt-2"
            onClick={() => props.handleDelete(props.event.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;

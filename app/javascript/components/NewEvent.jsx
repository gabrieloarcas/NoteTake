import React from "react";

const NewEvent = ({ handleFormSubmit }) => {
  let formFields = {};

  return (
    <form
      className="form-inline p-3"
      onSubmit={(e) => {
        handleFormSubmit(
          formFields.name.value,
          formFields.description.value,
          formFields.start.value,
          formFields.finish.value
        );
        e.target.reset();
      }}
    >
      <div>
        <small id="emailHelp" className="form-text text-muted">
          Name your event
        </small>
        <input
          className="form-control m-1"
          ref={(input) => (formFields.name = input)}
          placeholder="Event name"
          required
        />
      </div>
      <div>
        <small id="emailHelp" className="form-text text-muted">
          Describe your event
        </small>
        <input
          className="form-control m-1"
          ref={(input) => (formFields.description = input)}
          placeholder="Enter a description"
          required
        />
      </div>
      <div>
        <small id="emailHelp" className="form-text text-muted">
          Start time
        </small>
        <input
          className="form-control m-1"
          type="datetime-local"
          ref={(input) => (formFields.start = input)}
          placeholder="Enter start date"
          required
        />
      </div>
      <div>
        <small id="emailHelp" className="form-text text-muted">
          End Time
        </small>
        <input
          className="form-control m-1"
          type="datetime-local"
          ref={(input) => (formFields.finish = input)}
          placeholder="Enter end date"
          required
        />
      </div>
      <button className="btn btn-light ml-2">Add Event</button>
    </form>
  );
};

export default NewEvent;

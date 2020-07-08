import React from "react";

const NewEvent = (props) => {
  let formFields = {};

  return (
    <form
      onSubmit={(e) => {
        props.handleFormSubmit(
          formFields.name.value,
          formFields.description.value,
          formFields.start.value,
          formFields.finish.value
        );
        e.target.reset();
      }}
    >
      <input
        ref={(input) => (formFields.name = input)}
        placeholder="Enter the name of the event"
        required
      />
      <input
        ref={(input) => (formFields.description = input)}
        placeholder="Enter a description"
        required
      />
      <input
        type="datetime-local"
        ref={(input) => (formFields.start = input)}
        placeholder="Enter start date"
        required
      />
      <input
        type="datetime-local"
        ref={(input) => (formFields.finish = input)}
        placeholder="Enter end date"
        required
      />
      <button>Submit</button>
    </form>
  );
};

export default NewEvent;

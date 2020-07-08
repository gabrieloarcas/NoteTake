// const { start } = require("turbolinks");
import React, { useState } from "react";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      let name = this.name.value;
      let description = this.description.value;
      let start = this.start.value;
      let finish = this.finish.value;

      let id = this.props.event.id;
      let event = {
        id: id,
        name: name,
        description: description,
        start: start,
        finish: finish,
      };
      this.props.handleUpdate(event);
    }
    this.setState({
      editable: !this.state.editable,
    });
  }

  render() {
    let name = this.state.editable ? (
      <input
        type="text"
        ref={(input) => (this.name = input)}
        defaultValue={this.props.event.name}
      />
    ) : (
      <h3>{this.props.event.name}</h3>
    );
    let description = this.state.editable ? (
      <input
        type="text"
        ref={(input) => (this.description = input)}
        defaultValue={this.props.event.description}
      />
    ) : (
      <p>{this.props.event.description}</p>
    );
    let start = this.state.editable ? (
      <input
        type="date"
        ref={(input) => (this.start = input)}
        defaultValue={this.props.event.start}
      />
    ) : (
      <h3>{this.props.event.start}</h3>
    );
    let finish = this.state.editable ? (
      <input
        type="date"
        ref={(input) => (this.finish = input)}
        defaultValue={this.props.event.finish}
      />
    ) : (
      <p>{this.props.event.finish}</p>
    );
    return (
      <div>
        {name}
        {description}
        {start}
        {finish}
        <button onClick={() => this.handleEdit()}>
          {this.state.editable ? "Submit" : "Edit"}
        </button>
        <button onClick={() => this.props.handleDelete(this.props.event.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Event;

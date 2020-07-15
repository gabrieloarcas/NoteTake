// const { start } = require("turbolinks");
import React, { useState } from "react";
import moment from "moment";

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
      <p>{this.props.event.name}</p>
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
        type="text"
        ref={(input) => (this.start = input)}
        defaultValue={moment(this.props.event.start).format(
          "YYYY MMMM Do, h:mm a"
        )}
      />
    ) : (
      <p>{moment(this.props.event.start).format("YYYY MMMM Do, h:mm a")}</p>
    );
    let finish = this.state.editable ? (
      <input
        type="text"
        ref={(input) => (this.finish = input)}
        defaultValue={moment(this.props.event.finish).format(
          "YYYY MMMM Do, h:mm a"
        )}
      />
    ) : (
      <p>{moment(this.props.event.finish).format("YYYY MMMM Do, h:mm a")}</p>
    );
    return (
      <div className="">
        <div className="row d-flex justify-content-between align-items-center">
          {name}
          {description}
          {start}
          {finish}
          <div>
            <button className="btn btn-light" onClick={() => this.handleEdit()}>
              {this.state.editable ? "Submit" : "Edit"}
            </button>
            <button
              className="btn btn-light"
              onClick={() => this.props.handleDelete(this.props.event.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

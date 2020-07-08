import React, { Component } from "react";
import Body from "./Body";
import Event from "./Event";
import MyCalendar from "./MyCalendar";

const Home = (props) => {
  return (
    <div>
      <h1>Add an event to your calendar</h1>
      <Body />
      <MyCalendar />
    </div>
  );
};

export default Home;

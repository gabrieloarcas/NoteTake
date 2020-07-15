import React from "react";
import Body from "./Body";

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h4 className="mt-3 text-secondary">
        Add an event to your calendar in React
      </h4>
      <Body />
    </div>
  );
};

export default Home;

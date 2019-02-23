import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";

class TourList extends Component {
  state = {
    tours: []
  };
  render() {
    return (
      <section className="tour-list">
        <Tour />
      </section>
    );
  }
}

export default TourList;

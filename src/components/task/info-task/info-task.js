import React, { Component } from "react";
import Header from "../../header";

import Task from "./info-task-elem";


export default class InfoTask extends Component {
  render() {
    return (
      <div>
        <div id="height" className="position-fixed"></div>
        <div className="position-absolute d-flex align-items-center my-2">
          <Header />
          <div className="col-1 text-start"> </div>
        </div>
        <Task />
        <div className="py-5"></div>
      </div>
    );
  }
}

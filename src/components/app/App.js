import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "../login-form";
import HomePage from "../home-page";
import HardwereSettings from "../hardwere-settings";
import Question from "../question";
import Other from "../other";
import Task from "../task";
import AddClient from "../add-client"
import InfoTask from "../task/info-task";
import "./App.css";

export default class App extends Component {
  render() {
    // const userToken = localStorage.getItem("token");

    return (
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/settings" element={<HardwereSettings />} />
          <Route path="/question" element={<Question />} />
          <Route path="/other" element={<Other />} />
          <Route path="/task" element={<Task />} />
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/infotask" element={<InfoTask />} />
        </Routes>
      </>
    );

    // if (userToken) {
    //   return (
    //     <div className="app">
    //       <Header />
    //       <HomePage />
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="app">
    //       <LoginForm />
    //     </div>
    //   );
    // }
  }
}

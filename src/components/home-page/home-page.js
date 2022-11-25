import React, { Component } from "react";

import {ForHomePage} from "../if-not-user";
import Header from "../header";


export default class HomePage extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div className="about">
          <div className="position-absolute d-flex text-end col-12 pt-3">
            <div className="col"></div>
            <div className="col-2 text-center"></div>
          </div>
          <div className="height container-fluid d-flex flex-column align-items-center justify-content-center">
            <div>
              <h4 className="text4">Выберите интересующий вас раздел: </h4>
            </div>
            <ForHomePage />
          </div>
        </div>
      </>
    );
  }
}

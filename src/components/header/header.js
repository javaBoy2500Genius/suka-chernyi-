import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="bi bi-person-fill text-primary display-6">
        <div className="col-4 col-md-2">
          <img  
            className="col-6 col-md-5"
            alt="GosuLogo"
            src="../assets/logoBlue.png"
          />
        </div>
        <div className="col d-none d-md-flex"></div>
        <div className="col-2 d-md-none py-2">
          <i className="bi bi-plus-square text-light h1"></i>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-2 d-none d-md-flex py-2 px-5">
          <button className="btn form-control text-light py-2"></button>
        </div>
        <div className="col-md-3 col-lg-4 col-xl-3 d-none d-md-flex py-2 px-3">
          <div className="input-group">
            <input
              className="form-control py-2 my-2 bg-transparent text-light"
              type="text"
              placeholder="Поиск..."
            />
            <span className="input-group-text my-2 bg-transparent">
              <i className="bi bi-search text-primary"></i>
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2 text-end d-flex align-items-center justify-content-evenly text-light px-4">
          <div className="d-inline-block">
            <h5>kaz</h5>
          </div>
          <div className="d-inline-block">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="d-inline-block me-2">
            <h5>ru</h5>
          </div>
        </div>
      </header>
    );
  }
}

import React, { Component } from "react";

import Header from "../header";

export default class HardwereSettings extends Component {
  render() {
    return (
      <>
        <div>
          <div className="position-absolute d-flex align-items-center my-2 col-12">
            <div className="col-2 col-md-3 col-lg-2">
              <img
                className="col-10 col-md-5"
                alt="GosuLogo"
                src="../assets/logoBlue.png"
              />
            </div>
            <div className="col my-2"></div>
            <div className="col-2 text-end d-flex align-items-center justify-content-evenly pe-5">
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
            <div className="col-1 text-start"><Header /></div>
          </div>
          <div className="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0">
            <div className="col-11">
              <div className="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                <img className="col-2 mb-3" src="..\assets\image1.png" alt="" />
                <h4 className="text4">Настройка оборудования</h4>
                <input type="text" className="d-none" />
              </div>
            </div>
            <div className="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
              <form className="p-5 text-start">
                <div className="mb-3">
                  <label className="form-label">
                    Укажите название магазина или торговой точки:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Укажите контактный телефон:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="8(777)777-77-77"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Укажите приоритет:</label>
                  <select
                    className="form-select mb-3"
                    id="exampleFormControlInput1"
                    aria-label="select"
                  >
                    <option selected disabled>
                      {" "}
                    </option>
                    <option value="Обычный">Обычный</option>
                    <option value="Высокий">Высокий</option>
                    <option value="Критический">Критический</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Опишите проблему:</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <div className="form-floating">
                  <button
                    className="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2"
                    id="login"
                  >Добавить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

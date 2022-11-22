import React, { Component } from "react";
import "./home-page.css";
import Header from "../header";
// import HardwereSettings from "../hardwere-settings";

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
            <div>
              <div className="col-lg-11 d-flex justify-content-evenly mt-5 pb-5">
                <div className="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
                  <a href="/settings">
                    <img className="col-3 mb-3" alt="" />
                    <h4 className="text4">Настройка оборудования</h4>
                  </a>
                </div>

                <div className="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
                  <a href="/question">
                    <img className="col-3 mb-3" alt="" />
                    <h4 className="text4">Вопрос по 1С</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-11 d-flex justify-content-evenly mb-5 pb-5">
                <div className="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
                  <a href="/other">
                    <img
                      className="col-3 mb-3"
                      src="..\assets\image3.png"
                      alt=""
                    />
                    <h4 className="text4">Другое</h4>
                  </a>
                </div>
                <div className="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
                  <a href="/table">
                    <img className="col-3 mb-3" alt="" />
                    <h4 className="text4">Все заявки</h4>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-evenly mt-5 pb-md-5">
                <div className="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3">
                  <img className="col-3 mb-3" alt="" />
                  <h4 className="text4">Добавить сотрудника</h4>
                </div>
                <div className="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3">
                  <img
                    className="col-3 mb-3"
                    src="..\assets\image6.png"
                    alt=""
                  />
                  <h4 className="text4">Пригласить клиента</h4>
                </div>
                <div className="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3 d-none d-md-block">
                  <img className="col-3 mb-3" alt="" />
                  <h4 className="text4">Все заявки</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

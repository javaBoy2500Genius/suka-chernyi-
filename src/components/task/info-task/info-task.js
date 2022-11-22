import React, { Component } from "react";
import Header from "../../header";

export default class InfoTask extends Component {
  render() {
    return (
      <div>
        <div id="height" className="position-fixed"></div>
        <div className="position-absolute d-flex align-items-center my-2">
          <Header />
          <div className="col-1 text-start"> </div>
        </div>
        <div className="py-5"></div>
        <div className="container-fluid d-flex flex-column align-items-center">
          <div className="col-11 text-start">
            <div className="text-light mx-4 mb-4 mt-4">
              <div className="">
                <h2>df</h2>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-8">
                <div className="card bg-light mb-5">
                  <div className="card-body pb-0">
                    <h6 className="card-title border-bottom pb-2 text4">
                      <h2>df</h2>Задача ''
                    </h6>
                    <h5 className="card-text border-bottom py-md-4">fdg</h5>
                    <div className="card-subtitle position-relative d-flex py-2">
                      <input id="addfile" type="file" hidden="hidden" />
                      <label className="btn p-0 m-0" id="addfile-btn">
                        <i className="bi bi-paperclip h4 d-inline-block"></i>
                        <h5
                          className="m-0 text-secondary my-auto d-inline-block"
                          id="addfile-text"
                        >
                          + прикрепить файл
                        </h5>
                      </label>
                    </div>
                  </div>

                  <div className="card-footer bg-transparent py-3">
                    <button className="btn bg-primary bg-opacity-50 text-primary fw-bolder">
                      Сохранить
                    </button>
                  </div>
                </div>
                <div className="card mb-5 mb-md-0">
                  <div className="card-body">
                    <h4 className="card-title">fd</h4>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mt-5 d-none d-md-block">
                  <button className="btn bg-primary text-light">
                    {" "}
                    <h5>Отменить заявку</h5>{" "}
                  </button>
                  <button className="btn bg-light text-primary mx-3">
                    <h5>Закрыть заявку</h5>{" "}
                  </button>
                </div>
              </div>
              <div className="col-md-4 bg-Success">
                <div className="card">
                  <div className="card-title bg-primary rounded-top py-4"> </div>
                  <div className="card-body rounded-bottom">
                    <div className="row border-bottom py-2">
                      <div className="col text-secondary">Поставлена:</div>
                      <div className="col"></div>
                    </div>
                    <div className="row border-bottom py-2">
                      <div className="col text-secondary">Исполнитель:</div>
                      <div className="col"></div>
                    </div>
                    <div className="row border-bottom py-2">
                      <div className="col text-secondary">Приоритет:</div>
                      <div className="col"></div>
                    </div>
                    <div className="row py-2">
                      <div className="col text-secondary">Статус:</div>
                      <div className="col"></div>
                    </div>
                    <div className="row border-top py-2 pt-4 d-flex justify-content-around">
                      <button className="btn col-5 bg-primary text-light">
                        Взять в работу
                      </button>
                      <button className="btn col-5 bg-primary bg-opacity-25 text-primary">
                        Закрыть предв.
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-time bg-primary text-light mt-4">
                  <div className="card-body pb-0">
                    <div className="card-title">Время с момента подачи заявки:</div>
                    <h4>
                      <input
                        className="form-control bg-transparent"
                        type="time"
                        value="15:12"
                      />
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      Время с момента принятия заявки:
                    </div>
                    <h4>
                      <input
                        className="form-control bg-transparent"
                        type="time"
                        value="15:12"
                      />
                    </h4>
                  </div>
                </div>
                <div className="mt-4 d-md-none row mb-4">
                  <button className="btn bg-primary text-light col mx-1">
                    {" "}
                    <h5 className="text4">Отменить заявку</h5>{" "}
                  </button>
                  <button className="btn bg-light text-primary col mx-1">
                    <h5 className="text4">Закрыть заявку</h5>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

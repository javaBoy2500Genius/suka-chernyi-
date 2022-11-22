import React, { Component } from "react";

export default class AddClient extends Component {
  render() {
    return (
      <div>
        <div class="position-absolute col-12 row d-flex align-items-center">
          <div class="col-3">
            <img class="col-3" alt="GosuLogo" src="../assets/logoBlue.png" />
          </div>
          <div class="col"></div>
          <div class="col-2 text-end d-flex align-items-center justify-content-evenly px-5">
            <div class="d-inline-block">
              <h5>kaz</h5>
            </div>
            <div class="d-inline-block">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div class="d-inline-block">
              <h5>ru</h5>
            </div>
          </div>
          <div class="col-1 text-start">
            <i class="bi bi-door-open-fill text-primary display-6"></i>
          </div>
        </div>
        <div class="height container-fluid d-flex flex-column align-items-center justify-content-center">
          <div class="col-11">
            <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
              <img class="col-3 mb-3" src="..\assets\image6.png" alt="" />
              <h4>Пригласить клиента</h4>
            </div>
          </div>
          <div class="card col-5 bg-primary bg-opacity-50 mt-5 px-5">
            <form class="p-5 text-start">
              <div class="mb-3">
                <label class="form-label">ФИО клиента:</label>
                <input type="text" class="form-control" id="InputClientName" />
              </div>
              <div class="mb-3">
                <label class="form-label">Укажите e-mail клиента:</label>
                <input
                  type="email"
                  class="form-control"
                  id="InputClientEmail"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Организация клиента:</label>
                <input type="text" class="form-control" id="InputClientPass" />
              </div>
              <div class="mb-3 position-relative d-flex">
                <input id="addfile" type="file" hidden="hidden" />
                <label class="btn p-0 m-0" id="addfile-btn">
                  <i class="bi bi-paperclip h4 d-inline-block"></i>
                  <h5
                    class="m-0 text-secondary my-auto d-inline-block"
                    id="addfile-text"
                  >
                    Файл
                  </h5>
                </label>
              </div>
              <div class="form-floating">
                <button
                  class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2"
                  id="login"
                >
                  ДОБАВИТЬ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Question extends Component {
  render() {
    return (
      <>
        <div className="position-absolute col-12 row d-flex align-items-center">
          <div className="col-2 col-md-3 col-lg-2">
            <img
              className="col-10 col-md-5"
              alt="GosuLogo"
              src="../assets/logoBlue.png"
            />
          </div>
          <div className="col"></div>
          <div className="col-2 text-end d-flex align-items-center justify-content-evenly px-5">
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
            <div className="d-inline-block">
              <h5>ru</h5>
            </div>
          </div>
          <div className="col-1 text-start">
            {" "}
            <div></div>
            <div className="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0">
              <div className="col-11">
                <div className="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                  <img
                    className="col-2 mb-3"
                    src="..\assets\image2.png"
                    alt=""
                  />
                  <h4 className="text4">Вопрос по 1С</h4>
                  <input type="text" className="d-none" />
                </div>
              </div>
              <div className="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
                <form className="p-5 text-start">
                  <div className="mb-3">
                    <label className="form-label">
                      Выберите из списка примерный вариант вопроса:
                    </label>
                    <select
                      className="form-select mb-3"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        {" "}
                      </option>
                      <option value="Создание пользователя">
                        Создание пользователя
                      </option>
                      <option value="Настройка отчёта">Настройка отчёта</option>
                      <option value="Нет цен">Нет цен</option>
                      <option value="Проблемы с себестоимостью">
                        Проблемы с себестоимостью
                      </option>
                      <option value="Вопрос по бухгалтерии">
                        Вопрос по бухгалтерии
                      </option>
                      <option value="Вопрос по ЗУПу">Вопрос по ЗУПу</option>
                      <option value="Изменить неверный документ">
                        Изменить неверный документ
                      </option>
                      <option value="Новое техническое задание">
                        Новое техническое задание
                      </option>
                      <option value="Не закрывается смена">
                        Не закрывается смена
                      </option>
                      <option value="Ничего не подходит">
                        Ничего не подходит
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Укажите приоритет:</label>
                    <select
                      className="form-select mb-3"
                      id="exampleFormControlSelect"
                    >
                      <option selected disabled>
                        {" "}
                      </option>
                      <option value="Обычный">Обычный</option>
                      <option
                        value="Высокий"
                        className="bg-warning bg-opacity-50"
                      >
                        Высокий
                      </option>
                      <option
                        value="Критический"
                        className="bg-danger bg-opacity-50"
                      >
                        Критический
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Опишите проблему:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="mb-3 position-relative">
                    <input id="addfile" type="file" hidden="hidden" />
                    <label className="btn p-0 m-0" id="addfile-btn">
                      <i className="bi bi-paperclip h4 d-inline-block"></i>
                      <h5
                        className="m-0 text-secondary my-auto d-inline-block"
                        id="addfile-text"
                      >
                        Файл
                      </h5>
                    </label>
                  </div>
                  <div className="form-floating">
                    <button
                      className="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2"
                      id="login"
                    >
                      СОЗДАТЬ ЗАЯВКУ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

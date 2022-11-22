import React, { Component } from "react";

export default class Other extends Component {
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
            <div className="col-1 text-start"> </div>
          </div>
          <div className="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0">
            <div className="col-11">
              <div className="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                <img className="col-2 mb-3" src="..\assets\image3.png" alt="" />
                <h4 className="text4">Другое</h4>
              </div>
            </div>
            <div className="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
              <form className="p-5 text-start">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Укажите название магазина или торговой точки:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Укажите контактный телефон:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="8(777)777-77-77"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Опишите проблему:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    v-model="postOtherData.description"
                  ></textarea>
                </div>
                <div className="mb-3 position-relative">
                  <input id="addfile" type="file" hidden="hidden" />
                  <label className="btn p-0 m-0" for="addfile" id="addfile-btn">
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
                  ></button>
                </div>
                {/* <button className="btn">Show Posts</button>
                 <h2></h2>
                 <p></p>  */}
              </form>
              <form className="text-start d-none">
                <div>
                  <label className="form-label my-3">UserID:</label>
                  <input className="form-control" type="text" id="userId" />
                </div>
                <div>
                  <label className="form-label my-3">Title: </label>
                  <input className="form-control" type="text" id="title" />
                </div>
                <div>
                  <label className="form-label my-3">Body: </label>
                  <textarea className="form-control" id="body" rows="2"></textarea>
                </div>
                <button className="btn btn-light my-4">Create Post</button>

                {/* <div className="mb-3 position-relative d-flex">
                    <input v-on="addfile" id="addfile" type="file" hidden="hidden" @click="addNewFile">
                    <label className="btn p-0 m-0" for="addfile" id="addfile-btn">
                        <i className="bi bi-paperclip h4 d-inline-block"></i>
                        <h5 className="m-0 text-secondary my-auto d-inline-block" id="addfile-text">Файл</h5> 
                    </label>
                </div>
                <div className="form-floating">
                    <a className="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="createOther">СОЗДАТЬ ЗАЯВКУ</a>
                </div>  */}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

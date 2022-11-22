import React, { Component } from "react";

import PostLoginForm from "./post-login-form";

export default class LoginForm extends Component {
  async formSubmit(e) {
    e.preventDefault();

    const { login, password } = document.forms[0];

    const validateEmail = (login) => {
      return String(login)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const userToken = await PostLoginForm({
      login: validateEmail(login.value),
      password: password.value,
    });

    localStorage.setItem("token", JSON.stringify(userToken))
    
    if (localStorage.getItem("token")) {
      // eslint-disable-next-line no-restricted-globals
      location.reload()
    } 
  }
  render() {
    return (
      <div className="height container-fluid d-flex flex-column align-items-center justify-content-center">
        <div className="home align-items-center">
          <img className="col-2 col- col-xxl-2" alt="GosuLogo" />
        </div>
        <div className="card col-lg-4 col-xxl-3 bg-primary bg-opacity-50 mt-4 justify">
          <div className="card-header d-flex justify-content-evenly"></div>
          <div className="card-body px-4 mx-3">
            <div className="my-3">
              <h2 className="text2">Вход в систему</h2>
            </div>
            <form className="mt-5" onSubmit={this.formSubmit}>
              <input
                className="form-control mb-4"
                name="login"
                type="email"
                placeholder="test@gosu.kz"
              />
              <input
                className="form-control mb-4"
                name="password"
                type="password"
                placeholder="Пароль"
              />
              <div className="form-floating mb-5">
                <button
                  className="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2"
                  type="submit"
                >
                  ВОЙТИ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

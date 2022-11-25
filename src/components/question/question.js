import React, { Component, useState } from "react";

import { image2, imageLogo } from "../../image/img.js";

import { useMutation } from "@apollo/client";
import { ADD_TASK } from "../../apollo-client/apollo-request.js";
import UploadFile from "../upload-file";

function AddTask() {
  const userToken = JSON.parse(localStorage.getItem("token"));
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK);
  const [question, setQuestionState] = useState("");
  const [priority, setPriorityState] = useState("");
  const [text, setTextState] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <form className="p-5 text-start">
      <div className="mb-3">
        <label className="form-label">
          Выберите из списка примерный вариант вопроса:
        </label>
        <select
          className="form-select mb-3"
          id="exampleFormControlSelect1"
          aria-label="Default select example"
          onChange={(e) => {
            setQuestionState(e.target.value);
          }}
        >
          <option> </option>
          <option>Создание пользователя</option>
          <option>Настройка отчёта</option>
          <option>Нет цен</option>
          <option>Проблемы с себестоимостью</option>
          <option>Вопрос по бухгалтерии</option>
          <option>Вопрос по ЗУПу</option>
          <option>Изменить неверный документ</option>
          <option>Новое техническое задание</option>
          <option>Не закрывается смена</option>
          <option>Ничего не подходит</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Укажите приоритет:</label>
        <select
          className="form-select mb-3"
          id="exampleFormControlSelect"
          onChange={(e) => {
            setPriorityState(e.target.value);
          }}
        >
          <option> </option>
          <option>Обычный</option>
          <option className="bg-warning bg-opacity-50">Высокий</option>
          <option className="bg-danger bg-opacity-50">Критический</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Опишите проблему:</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          onChange={(e) => {
            setTextState(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="mb-3 position-relative">
        <label className="btn p-0 m-0" id="addfile-btn">
          <input
            id="addfile"
            type="file"
            hidden="hidden"
            // onChange={this.OnChangeFile}
          />
          <i className="bi bi-paperclip h4 d-inline-block"></i>
          <h5
            className="m-0 text-secondary my-auto d-inline-block"
            id="addfile-text"
          >
            Файл
          </h5>
        </label>
      </div>
      <div className="form-floating"></div>
      <button
        className="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2"
        onClick={(e) => {
          e.preventDefault();
          console.log(userToken);
          addTask({
            variables: {
              taskData: {
                title: "Вопрос по 1С",
                description: text,
                create_date: `${Date.now()}`,
                priority: priority,
                mata_tags: [question],
                files: [
                  {
                    name: "asd",
                    create_date: `${Date.now()}`,
                    file_url: "asd",
                  },
                ],
              },
              token: userToken.token,
            },
          });
        }}
      >
        СОЗДАТЬ ЗАЯВКУ
      </button>
    </form>
  );
}

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.OnValueCangeOfQuestion = this.OnValueCangeOfQuestion.bind(this);
    this.OnValueChangePriority = this.OnValueChangePriority.bind(this);
    this.OnValueChangeText = this.OnValueChangeText.bind(this);
    // this.OnChangeFile = this.OnChangeFile.bind(this);
  }
  OnValueCangeOfQuestion(e) {
    // console.log(e.target.value);
    this.setState({
      question: e.target.value,
    });
  }
  OnValueChangePriority(e) {
    // console.log(e.target.value);
    this.setState({
      priority: e.target.value,
    });
  }
  OnValueChangeText(e) {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }
  // async OnChangeFile(e) {
  //   const fileUrl = await UploadFile(e.target.files[0])
  //   this.setState({
  //     file: fileUrl
  //   })
  // }
  render() {
    return (
      <div>
        <div className="position-absolute col-12 row d-flex align-items-center">
          <div className="col-2 col-md-3 col-lg-2">
            <img className="col-10 col-md-5" alt="GosuLogo" src={imageLogo} />
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
            <i className="bi bi-person-fill text-primary display-6"></i>
          </div>
        </div>
        <div className="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0">
          <div className="col-11">
            <div className="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
              <img className="col-2 mb-3" src={image2} alt="" />
              <h4 className="text4">Вопрос по 1С</h4>
              <input type="text" className="d-none" />
            </div>
          </div>
          <div className="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
            <AddTask />
          </div>
        </div>
      </div>
    );
  }
}

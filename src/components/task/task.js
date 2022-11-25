import React, { Component } from "react";

import { useQuery } from "@apollo/client";
import { ForTaskPage } from "../if-not-user";

import Header from "../header";
import { GET_ALLTASKS } from "../../apollo-client/apollo-request";

function AllTask({ page = 0 }) {
  const { loading, error, data } = useQuery(GET_ALLTASKS, {
    variables: { page: page },
  });

  if (loading)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  if (error)
    return (
      <tr>
        <td>Error : {error.message}</td>
      </tr>
    );

  return data.getAllTasks.map(
    (
      {
        _id,
        implementer_id,
        priority,
        state_id,
        description,
        create_date,
        title,
      },
      i
    ) => (
      <tr key={(i + Math.random()).toString()}>
        <th scope="row" key={(i + Math.random()).toString()}>
          {_id}
        </th>
        <td className="btn" key={(i + Math.random()).toString()}>
          <a href="/infotask" onClick={() => localStorage.setItem("taskId", _id)}>{title}</a>
        </td>
        <td key={(i + Math.random()).toString()}>{description}</td>
        <td key={(i + Math.random()).toString()}>
          {implementer_id !== null
            ? implementer_id.forEach((i) => `${i}, `)
            : null}
        </td>
        <td key={(i + Math.random()).toString()}>{create_date}</td>
        <td key={(i + Math.random()).toString()}>{priority}</td>
        <td key={(i + Math.random()).toString()}>{state_id}</td>
      </tr>
    )
  );
}



export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  render() {
    return (
      <>
        <div>
          <div id="height"></div>
          <div className="position-absolute d-flex align-items-center my-2">
            <Header />
            <div className="col-1 text-start"></div>
          </div>
          <div className="py-5"></div>
          <div className=" container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="col-11">
              <ForTaskPage />
              <div className="card">
                <table className="table bg-light text-start">
                  <thead className="fw-bolder text-light">
                    <tr className=" bg-primary rounded-3">
                      <th scope="col">ID</th>
                      <th scope="col">Тема</th>
                      <th scope="col">Наименование</th>
                      <th scope="col">Исполнитель</th>
                      <th scope="col">Дата подачи заявки</th>
                      <th scope="col">Приоритет</th>
                      <th scope="col">Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AllTask page={this.state.page} />
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex justify-content-around col-5">
                  <div>
                    <button
                      className="btn bg-light rounded rounded-circle"
                      onClick={() =>
                        this.setState({
                          page: this.state.page - 1,
                        })
                      }
                    >
                      <h3>Prev</h3>
                    </button>
                    <button
                      className="btn bg-light rounded rounded-circle"
                      onClick={() =>
                        this.setState({
                          page: this.state.page + 1,
                        })
                      }
                    >
                      <h3>Next</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

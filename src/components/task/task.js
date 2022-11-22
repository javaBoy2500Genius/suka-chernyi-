import React, { Component } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Header from "../header";
import {
  GET_ALLTASKS,
  ADD_STATE_TO_TASK,
} from "../../apollo-client/apollo-request";

function AllTask() {
  const { loading, error, data } = useQuery(GET_ALLTASKS, {
    variables: { page: 0 },
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
          {title}
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

function AddStateToTask() {
  const [addStateToTask, { loading, error }] =
    useMutation(ADD_STATE_TO_TASK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // addStateToTask({
  //   variables: {
  //     taskId: "63723ce2f8c5ecb058e8e58d",
  //     stateData: {
  //       title: "asdas",
  //       sla: 2,
  //     },
  //   },
  // });
}

export default class Task extends Component {
  render() {
    return (
      <>
        <div>
          <div id="height"></div>
          <div className="position-absolute d-flex align-items-center my-2">
            <Header />
            <div className="col-1 text-start"> </div>
          </div>
          <div className="py-5"></div>
          <div className=" container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="col-11">
              <div className="mb-3 d-flex">
                <div className="col-6 col-md-4 bg-light rounded d-flex align-items-center px-2 py-2 me-md-5 me-2">
                  <h1 className="text-primary text1">125 &ensp;</h1>
                  <h3 className="text3">закрытых заявок</h3>
                </div>
                <div className="col-6 col-md-4 bg-light rounded d-flex align-items-center px-2 py-2">
                  <h1 className="text-primary text1">84 &ensp;</h1>
                  <h3 className="text3">заявок в работе</h3>
                </div>
              </div>
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
                    <AllTask />
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex justify-content-around col-5">
                  <div>
                    <AddStateToTask />
                    <button className="btn bg-light rounded rounded-circle">
                      <h3>Загрузить еще</h3>
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

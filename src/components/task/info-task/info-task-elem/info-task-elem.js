import { useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_ONE_TASK } from "../../../../apollo-client/apollo-request";
import { GET_ALL_COMMENTS_TO_TASK } from "../../../../apollo-client/apollo-request";
import { ADD_COMMENT_TO_TASK } from "../../../../apollo-client/apollo-request";
import { GET_USER } from "../../../../apollo-client/apollo-request";
import { GET_STATE_TO_TASK } from "../../../../apollo-client/apollo-request";

import { ForIntoTaskPage } from "../../../if-not-user";

function AddCommentsToTask() {
  const taskId = localStorage.getItem("taskId");
  const userToken = JSON.parse(localStorage.getItem("token"));
  const [comment, setComment] = useState("");

  const [addCommentsToTask, { loading, error }] =
    useMutation(ADD_COMMENT_TO_TASK);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message} </p>;
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="btn bg-primary text-light"
        onClick={() => {
          addCommentsToTask({
            variables: {
              commentsData: {
                comments: comment,
                task_id: taskId,
              },
              token: userToken.token,
            },
          });
        }}
      >
        <h5>Добавить комментарий</h5>
      </button>
    </>
  );
}

function TaskComments() {
  const taskId = localStorage.getItem("taskId");

  const { data, loading, error } = useQuery(GET_ALL_COMMENTS_TO_TASK, {
    variables: { taskId: taskId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message} </p>;
  }

  const { getAllComments } = data;

  return getAllComments.map((item) => {
    function GetUserName() {
      const { data, loading, error } = useQuery(GET_USER, {
        variables: { userId: item.author_id },
      });

      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>{error.message} </p>;
      }

      return (
        <span>
          {data.getUser.first_name} {data.getUser.middle_name}
        </span>
      );
    }
    return (
      <h4 className="card-title" key={Math.random()}>
        {item.comments} <br /> <GetUserName />
      </h4>
    );
  });
}

function Task() {
  const taskId = localStorage.getItem("taskId");
  const { data, loading, error } = useQuery(GET_ONE_TASK, {
    variables: { taskId: taskId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message} </p>;
  }

  const { getTask } = data;

  function GetUserName() {
    const { data, loading, error } = useQuery(GET_USER, {
      variables: { userId: getTask.implementer_id },
    });
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message} </p>;
    }
    if (data.getUser === null) {
      return <span>не назначен</span>;
    } else {
      return (
        <span>
          {data.getUser.first_name}
          {data.getUser.middle_name}
        </span>
      );
    }
  }

  function GetState() {
    const {data, loading, error} = useQuery(GET_STATE_TO_TASK, {
        variables: {stateId: getTask.state_id}
    })
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message} </p>;
    }
    if (data.getState === null) {
        return <span>без статуса</span>
    } else {
        return <span>{data.getState.title}</span>
    }
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="col-11 text-start">
        <div className="text-light mx-4 mb-4 mt-4">
          <div className="">
            <h2>{getTask.title}</h2>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-8">
            <div className="card bg-light mb-5">
              <div className="card-body pb-0">
                <h6 className="card-title border-bottom pb-2 text4">
                  Задача {getTask._id}
                </h6>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                >
                  {getTask.description}
                </textarea>
                <div className="card-subtitle position-relative d-flex py-2">
                  <label className="btn p-0 m-0" id="addfile-btn">
                    <i className="bi bi-paperclip h4 d-inline-block"></i>
                    <h5
                      className="m-0 text-secondary my-auto d-inline-block"
                      id="addfile-text"
                    >
                      <input id="addfile" type="file" hidden="hidden" />+
                      прикрепить файл
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
                <TaskComments />
                <AddCommentsToTask />
              </div>
            </div>
            <div className="mt-5 d-none d-md-block">
              <button className="btn bg-primary text-light">
                <h5>Отменить заявку</h5>
              </button>
              <button className="btn bg-light text-primary mx-3">
                <h5>Закрыть заявку</h5>
              </button>
            </div>
          </div>
          <div className="col-md-4 bg-Success">
            <div className="card">
              <div className="card-title bg-primary rounded-top py-4"> </div>
              <div className="card-body rounded-bottom">
                <div className="row border-bottom py-2">
                  <div className="col text-secondary">Поставлена:</div>
                  <div className="col">{getTask.create_date}</div>
                </div>
                <div className="row border-bottom py-2">
                  <div className="col text-secondary">Исполнитель:</div>
                  <div className="col">
                    <GetUserName />
                  </div>
                </div>
                <div className="row border-bottom py-2">
                  <div className="col text-secondary">Приоритет:</div>
                  <div className="col">{getTask.priority}</div>
                </div>
                <div className="row py-2">
                  <div className="col text-secondary">Статус:</div>
                  <div className="col"><GetState /></div>
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
            <ForIntoTaskPage />
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
  );
}

export default Task;

import React from "react";
import "./Tasks.scss";
import penSvg from "../../assets/img/pen.svg";
import Axios from "axios";

import AddTaskForm from "./AddTaskForm";

const Tasks = ({ list, onEditTitle, onAddTask }) => {
  const editTitle = () => {
    const newTitle = window.prompt("Введите новое название списка", list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      Axios.patch("http://localhost:3002/lists/" + list.id, {
        name: newTitle,
      }).catch(() => alert("Произошла ошибка. Повторите попытку"));
    } else {
      alert("Error: Поле ввода осталось пустым");
    }
  };

  return (
    <div className="tasks">
      <h2 className={"tasks__title"}>
        {list.name}
        <i>
          <img src={penSvg} alt="pen" onClick={() => editTitle()} />
        </i>
      </h2>
      <div className="tasks__items">
        {!list.tasks.length && (
          <h2 className={"tasks__items-get"}>Задачи отсутствуют</h2>
        )}
        {list.tasks.map((task) => {
          return (
            <div key={task.id} className="tasks__items-row">
              <div className="checkbox">
                <input id={`task-${task.id}`} type={"checkbox"} />
                <label htmlFor={`task-${task.id}`}>
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
              </div>
              <input
                className={"tasks__items-info"}
                readOnly
                value={task.text}
              />
            </div>
          );
        })}
      </div>
      <AddTaskForm list={list} onAddTask={onAddTask} />
    </div>
  );
};

export default Tasks;

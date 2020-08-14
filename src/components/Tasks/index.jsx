import React from "react";
import "./Tasks.scss";
import penSvg from "../../assets/img/pen.svg";

const Tasks = () => {
  return (
    <div className="tasks">
      <h2 className={"tasks__title"}>
        Фронтенд
        <i>
          <img src={penSvg} alt="pen" />
        </i>
      </h2>
      <div className="tasks__items">
        <div className="tasks__items-row">
          <div className="checkbox">
            <input id={"check"} type={"checkbox"} />
            <label htmlFor="check">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <input
            className={"tasks__items-info"}
            value={" Изучить паттерны проектирования"}
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
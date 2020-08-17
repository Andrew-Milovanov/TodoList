import React from "react";

const Task = ({ task, key }) => {
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
      <input className={"tasks__items-info"} readOnly value={task.text} />
    </div>
  );
};

export default Task;

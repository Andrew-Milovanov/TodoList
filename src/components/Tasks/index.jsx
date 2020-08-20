import React from "react";
import "./Tasks.scss";
import penSvg from "../../assets/img/pen.svg";
import Axios from "axios";
import Task from "./Task";

import AddTaskForm from "./AddTaskForm";

const Tasks = ({
  list,
  onEditTitle,
  onAddTask,
  onRemoveTask,
  onEditTask,
  onCompleteTask,
  withoutEmpty,
}) => {
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
      <h2 className={"tasks__title"} style={{ color: list.color.hex }}>
        {list.name}
        <i>
          <img src={penSvg} alt="pen" onClick={() => editTitle()} />
        </i>
      </h2>
      <div className="tasks__items">
        {!withoutEmpty && !list.tasks.length && (
          <h2 className={"tasks__items-get"}>Задачи отсутствуют</h2>
        )}
        {list.tasks.map((task) => {
          return (
            <Task
              key={task.id}
              list={list}
              onEdit={onEditTask}
              onRemove={onRemoveTask}
              onComplete={onCompleteTask}
              {...task}
            />
          );
        })}
      </div>
      {!withoutEmpty && (
        <AddTaskForm list={list} key={list.id} onAddTask={onAddTask} />
      )}
    </div>
  );
};

export default Tasks;

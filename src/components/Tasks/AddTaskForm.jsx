import React, { useState } from "react";
import addSvg from "../../assets/img/Add.svg";
import Axios from "axios";
const AddTaskForm = ({ list, onAddTask }) => {
  const [addTaskFrom, setAddTaskFrom] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const ToggleFrom = () => {
    setAddTaskFrom(!addTaskFrom);
    setInputValue("");
  };

  const addNewTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: true,
    };
    setIsLoading(true);
    if (inputValue) {
      Axios.post("http://localhost:3002/tasks", obj)
        .then(({ data }) => {
          onAddTask(list.id, data);
          ToggleFrom();
        })
        .catch((err) => {
          alert("Ошибка при добавлении задачи!");
        })
        .finally(() => setIsLoading(false));
    } else {
      alert("Поле ввода осталось пустым");
      setIsLoading(false);
    }
  };

  return (
    <div className="tasks__from">
      {addTaskFrom ? (
        <div onClick={ToggleFrom} className="tasks__from-new">
          <img src={addSvg} alt="add tasks" />
          <span>Новая задача</span>
        </div>
      ) : (
        <div className="tasks__from-block">
          <input
            placeholder={"Текст задачи"}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></input>
          <div className={"tasks__from-buttons"}>
            <button
              disabled={isLoading}
              onClick={addNewTask}
              className={"button"}
            >
              {isLoading ? "Добавление..." : "Добавить задачу"}
            </button>
            <button onClick={ToggleFrom} className={"button button--grey"}>
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;

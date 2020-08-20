import React, { useState, useEffect } from "react";
import "./AddList.scss";
import List from "../List";
import Badge from "../Badge";
import closeSvg from "../../assets/img/close.svg";
import axios from "axios";

const AddList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (colors) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setInputValue("");
    setVisiblePopup(false);
    selectColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }
    setLoading(true);
    axios
      .post("http://localhost:3002/lists", {
        name: inputValue,
        colorId: seletedColor,
      })
      .then(({ data }) => {
        const color = colors.filter((c) => c.id === seletedColor)[0];
        const listObj = { ...data, color, tasks: [] };
        onAdd(listObj);
        onClose();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={"add-list"}>
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1V11"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 6H11"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить список",
            active: false,
            id: 1,
          },
        ]}
      />
      {visiblePopup && (
        <div className={"add-list__popup"}>
          <div>
            <img
              onClick={onClose}
              className={"add-list__popup-close-btn"}
              src={closeSvg}
              alt={""}
            />
          </div>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type={"text"}
            placeholder={"Название списка"}
            className={"field"}
          ></input>
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => selectColor(color.id)}
                color={color.name}
                key={color.id}
                className={seletedColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className={"button"}>
            {isLoading ? "Добавление..." : "Добавить"}
          </button>
        </div>
      )}
    </div>
  );
};
export default AddList;

import React, { useState } from "react";
import "./AddList.scss";
import List from "../List";
import Badge from "../Badge";
import closeSvg from "../../assets/img/close.svg";

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);

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
              onClick={() => setVisiblePopup(false)}
              className={"add-list__popup-close-btn"}
              src={closeSvg}
            />
          </div>
          <input
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
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button className={"button"}>Добавить</button>
        </div>
      )}
    </div>
  );
};
export default AddList;

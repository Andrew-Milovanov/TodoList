import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../Badge";

const List = ({ items, isRemovable, onClick }) => {
  return (
    <React.Fragment>
      <ul className="list" onClick={onClick}>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={classNames(item.className, { active: item.active })}
            >
              <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;

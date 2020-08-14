import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../Badge";
import removeSvg from "./../../assets/img/remove.svg";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить список?")) {
      onRemove(item);
    }
  };

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
              {isRemovable && (
                <img
                  className={"list__remove-icon"}
                  src={removeSvg}
                  alt={"remove"}
                  onClick={() => removeList(item)}
                />
              )}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;

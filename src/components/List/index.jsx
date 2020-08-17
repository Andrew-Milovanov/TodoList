import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../Badge";
import removeSvg from "./../../assets/img/remove.svg";
import Axios from "axios";

const List = ({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem,
}) => {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить список?")) {
      Axios.delete("http://localhost:3002/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <React.Fragment>
      <ul className="list" onClick={onClick}>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={classNames(item.className, {
                active: item.active
                  ? item.active
                  : activeItem && activeItem.id === item.id,
              })}
              onClick={
                onClickItem
                  ? () => {
                      onClickItem(item);
                    }
                  : null
              }
            >
              <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
              <span className={"cat-text"}>
                {item.name}
                {item.tasks && ` (${item.tasks.length})`}
              </span>
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

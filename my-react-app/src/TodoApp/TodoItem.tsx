import React, { FC } from "react";
import "./Todo.scss";

type TodoProps = {
  todo: string;
  onRemove?: () => void;
};

export const TodoItem: FC<TodoProps> = ({ todo, onRemove }) => {
  return (
    <div className="todoitem-page">
      <p>Todo item!</p>
      <span>{todo}</span>
      <button onClick={onRemove}>Obrisi</button>
    </div>
  );
};

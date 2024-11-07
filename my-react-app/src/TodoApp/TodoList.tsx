import React, { FC, useEffect, useState } from "react";
import "./Todo.scss";
import { TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  function SaveTodoList() {
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  useEffect(() => {}, []);

  return (
    <div className="todolist-page">
      <p>Todo list!</p>
      <form onSubmit={SaveTodoList}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button>Save</button>
        <div>
          <p>Todo items:</p>
          {todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </div>
      </form>
    </div>
  );
};

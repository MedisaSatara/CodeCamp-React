import React, { FC, useEffect, useRef, useState } from "react";
import "./Todo.scss";
import { TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function saveTodoList(event: React.FormEvent) {
    event.preventDefault();
    console.log(todo);
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  /*fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));*/

  const removeTask = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="todolist-page">
      <p>Todo list!</p>
      <form onClick={saveTodoList}>
        <input
          ref={inputRef}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button>Save</button>
      </form>
      <div>
        <p>Todo items:</p>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={() => removeTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

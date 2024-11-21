import React, { FC, useEffect, useRef, useState } from "react";
import "./Todo.scss";
import { TodoItem } from "./TodoItem";
import { useAuth } from "../hooks/useAuth";
import { Task } from "../types/Task";
import { addTask } from "../services/taskService";
import { error } from "console";

export const TodoList: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { user } = useAuth();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  function saveTodoList(event: React.FormEvent) {
    event.preventDefault();
    console.log(todo);
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  useEffect(() => {
    inputRef.current?.focus();
    const savedItems = JSON.parse(localStorage.getItem("todoItems") || "[]");
    if (savedItems && Array.isArray(savedItems)) {
      setTodoList(savedItems);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoList));
  }, [todoList]);
  /*fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));*/

  const removeTask = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newTaskTitle.trim()) {
      const newTask: Omit<Task, "id"> = {
        title: newTaskTitle,
        description: "",
        completed: false,
        userId: user.uid,
        createAt: new Date(),
        //selectedCategory ||
        category: "Uncatagorize",
      };
      await addTask(newTask);
      setNewTaskTitle("");
    }
    //@typescript-eslint/no-unused-expressions
    else {
      //@typescript-eslint/no-unused-expressions
      console.error("error");
    }
  };

  return (
    <div className="todolist-page">
      <p>Todo list!</p>
      <form onClick={handleAddTask}>
        <input
          ref={inputRef}
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
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

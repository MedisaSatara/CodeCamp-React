import React, { FC, useEffect, useRef, useState } from "react";
import "./Todo.scss";
import { TodoItem } from "./TodoItem";
import { useAuth } from "../hooks/useAuth";
import { Task } from "../types/Task";
import { addTask, getUserTasksRealtime, updateTask } from "../services/taskService";
import { error } from "console";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../firebase";

export const TodoList: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { user } = useAuth();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [itemTasks, setItemTasks]=useState<Task[]>([]);
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
  const getUserTask=async(userId:string):Promise<Task[]>=>{
    try{
      const q=query(collection(db,"tasks"), where("userId","==",userId));
      const querySnapshot=await getDocs(q);
      return querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data} as Task));

      
    }catch(error){
      console.error("error showing items",error);
      throw error;
    }
  }
  const deleteTask = async (taskId: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };

  useEffect(()=>{
    let unsubscribe:()=>void;
    if(user){
      unsubscribe=getUserTasksRealtime(user.uid,setItemTasks);
      console.log(itemTasks,'unsubscribe')

    }
    return()=>{
      if(unsubscribe){
        unsubscribe();
      }
    };
  },[user]);

  const handleToggleComplete=async(task:Task)=>{
    await updateTask(task.id!,{completed:!task.completed});
  };
  const handleDeleteTask=async(taskId:string)=>{await deleteTask(taskId)};

  const filteredTasks=itemTasks;

  if(!user){
    return<div>Please log in to view tasks.</div>
  }
  


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
            onRemove={() => deleteTask(todo)}
          />
        ))}
        {filteredTasks.map((task)=>(
          <li key={task.id}>
            <input type="checkbox" checked={task.completed}
            onChange={()=>handleToggleComplete(task)} />
            {task.title}
            <button onClick={()=>handleDeleteTask(task.id!)}>Obrisi</button>
          </li>
        ))}
        
      </div>
    </div>
  );
};

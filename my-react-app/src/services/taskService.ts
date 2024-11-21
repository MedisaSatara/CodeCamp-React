import { addDoc, collection } from "firebase/firestore";
import { Task } from "../types/Task";
import { db } from "../firebase";

export const addTask=async(task:Omit<Task,"id">):Promise<string>=>{
 try{
    const docRef=await addDoc(collection(db,"tasks"),task);
    return docRef.id;

 }catch(error){
    console.error("Error adding task",error);
    throw error;
 };
};
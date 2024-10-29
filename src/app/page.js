"use client";
import AddTask from "@/components/AddTask.js";
import TaskList from "@/components/TaskList.js";
import { TasksProvider } from "@/components/TasksContext";

export default function TaskApp() {
  return (
  
    <TasksProvider>
      <h1 className="font-bold text-lg">Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

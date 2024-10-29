"use client"; 

import AddTask from '@/Component/AddTask.js';
import TaskList from '@/Component/TaskList.js';
import { TasksProvider } from '@/Component/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

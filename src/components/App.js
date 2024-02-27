import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [task, setTask] = useState(TASKS)
const [categories, setCategories] = useState(CATEGORIES)
const [selected, setSelected] = useState("All")

const navSelect = (category) => {
  if (category === "All") {
    setTask(TASKS)
  } else {
    const filtered = TASKS.filter((t) => t.category === category)
    setTask(filtered)
    setSelected(category)
  }
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}  navSelect = {navSelect} selected={selected} />
      <NewTaskForm  categories={categories} setCategories={setCategories} tasks ={task} setTask={setTask} selected={selected} setSelected={setSelected}/>
      <TaskList task={task} setTask={setTask}/>
    </div>
  );
 
}

export default App;

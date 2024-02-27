import React from "react";
import Task from "./Task";

function TaskList({task, setTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {task.map((t) => {
       return <Task key={t.id} task={t} taskList={task} setTask={setTask}/>
      })}
    </div>
  );
}

export default TaskList;

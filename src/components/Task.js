import React from "react";

function Task({task, taskList, setTask}) {

  const remove = () => {
    const that = taskList.filter((t) => {
      return t.id !== task.id
    })
    setTask(that)
  }


  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={remove} className="delete">X</button>
    </div>
  );
}

export default Task;

import React, { useState } from "react";

function NewTaskForm({categories, selected, setSelected, tasks, setTask}) {
    

  const [newInput, setNewInput] = useState(" ")

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: newInput,
      category: selected
    }
    setTask([...tasks, newTask])
    setNewInput(" ")


  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newInput} onChange={(e) => setNewInput(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category"  value={selected} onChange={(e) => setSelected(e.target.value)}>
          {/* render <option> elements for each category here */}
         {categories.filter((cat) => cat !== "All").map((cat, index) => {
          return <option key={index} value={cat}>{cat}</option>
         })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form> 
  );
}

export default NewTaskForm;

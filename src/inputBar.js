import React, { useState } from "react";
import TaskItems from "./taskItems";
import "./barContainer.css";
const InputBar = () => {
  const [item, setItem] = useState([]);
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (description) {
      setItem([...item, description]);
      setDescription("");
    } else alert("Debe agregar una tarea!");
  };

  const handleRemoveItem = (i) => {
    console.log("Deleted: ", i);
    let remove = item.filter((_, index) => index !== i);
    setItem(remove);
  };

  return (
    <div>
      <div className="bar-container">
        <div>
          <input
            className="input-task"
            type="text"
            placeholder="Agrega tarea..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="btn-add" onClick={addTask}>
          Agregar
        </div>
      </div>
      <TaskItems tasks={item} handleRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default InputBar;

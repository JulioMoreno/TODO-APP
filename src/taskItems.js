import React from 'react';
import "./taskItems.css";
import Item from './item';
const TaskItems = ({handleRemoveItem, tasks}) => {
    let tasksItem = [...tasks];

  return (
    <div>
      <div className="task-container">
        <div className="row-task">Task</div>
        <div className="row-action">Action</div>
      </div>
      {tasksItem.map((e, i) => {
        return <Item key={i} id={i} task={e} handleRemoveItem={handleRemoveItem} />
      })}
    </div>
  );
};

export default TaskItems;

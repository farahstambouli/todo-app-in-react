import React from 'react';

//defines a functional components that takes these "paramater" as props

const TaskItem = ({ task, deleteTask, completeTask, startEditing }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => completeTask(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => startEditing(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;




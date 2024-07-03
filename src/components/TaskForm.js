import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  //This useEffect hook runs whenever taskToEdit changes. If taskToEdit is provided, it updates the task state with the values from taskToEdit
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  //This function handles changes in the form inputs.
  //make sure that the rest of the task object remains unchanged.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  //This function handles the form submission. 
  //If the taskToEdit prop is provided, the task is updated. Otherwise, a new task is created.
  //The task state is reset to an empty object.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (taskToEdit) {
        editTask(task);
      } else {
        addTask(task);
      }
      setTask({ name: '', description: '' });
    } else {
      alert('Both fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;

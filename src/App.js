import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  //this function creates a new task object with a unique id (using Date.now()),
  // and sets completed to false by default.

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };
//The startEditing function is used to set the 
//taskToEdit state to the task that the user wants to edit. 
  const startEditing = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} startEditing={startEditing} />
    </div>
  );
};

export default App;


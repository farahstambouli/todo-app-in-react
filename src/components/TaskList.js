import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, completeTask, startEditing }) => {
  return (
    <div className="task-list">
        {/* This block of code maps over the tasks array, which contains all the task objects. For each task, it renders a TaskItem component.  */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          startEditing={startEditing}
        />
      ))}
    </div>
  );
};

export default TaskList;
// The TaskList component is responsible for rendering a list of tasks.
// It takes an array of tasks and functions for deleting, completing, and editing tasks as props. 
// It maps over the tasks array and renders a TaskItem component for each task, passing the relevant props to each TaskItem.
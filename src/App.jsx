import React, { useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoTasks from './Components/TodoTasks';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      let newTask = event.target.value;
      event.target.value = '';
      let newTodoTask = [...tasks, newTask];
      setTasks(newTodoTask);
    }
  }

  const handleDelete = (deleteTask) => {
    const newTask = tasks.filter((task) => task !== deleteTask)
    setTasks(newTask);

  }

  return (
    <center>
    <h1>My Todo List</h1>
    <TodoInput handleChange={handleChange}/>
    <TodoTasks todos={tasks} handleDelete={handleDelete} />
    </center>
  )
}

export default App
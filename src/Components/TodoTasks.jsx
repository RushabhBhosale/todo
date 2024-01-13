import React from 'react'

const TodoTasks = ({ todos, handleDelete }) => {
   return (
      <>
         {todos.map ((todo) => (
            <li key={todo}>
               {todo}
               <button onClick={handleDelete(todos)}>Delete</button>
            </li>
         ))}
      </>
   )
}

export default TodoTasks
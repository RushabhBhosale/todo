import React from 'react'

const TodoInput = ({ handleChange }) => {
   return (
      <>
         <input type="text" className='px-5 py-2' placeholder='Enter your tasks here' onKeyDown={handleChange} />
      </>
   )
}

export default TodoInput
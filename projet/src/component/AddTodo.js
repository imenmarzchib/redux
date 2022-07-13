import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../redux/todoslice/Todoslice'

const AddTodo = () => {
  const dispatch=useDispatch()
  const[task, setTask]=useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false,
  })
  return (
    <div className='add-task'>
      <input type="text" placeholder='enter task title'
       onChange={(e)=>{setTask({...task,title:e.target.value})}}/>
      <input type="text" placeholder='enter discription'
      onChange={(e)=>{setTask({...task,description:e.target.value})}}/>
      <button onClick={()=> dispatch(addtask(task))}
      >
        Add New Task</button>
    </div>
  )
}

export default AddTodo

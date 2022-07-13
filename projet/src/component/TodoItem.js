import React from 'react'
import { useDispatch } from 'react-redux'
import { donetask, removetask } from '../redux/todoslice/Todoslice'
import Edit from './Edit';


const TodoItem = ({todo}) => {
 const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone? "done":"undone"}`}>
      <div className='text'>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      </div>
      <span onClick={()=>dispatch(donetask({id:todo.id}))}>{todo.isDone?"Done":"Not Done"}</span>
      <button onClick={()=>dispatch(removetask({id:todo.id}))}>remove</button>
      <Edit id={todo.id}/>
     
    </div>
  )
}

export default TodoItem
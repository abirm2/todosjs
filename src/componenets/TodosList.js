import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletetask, donetask,  } from '../todos/action'

import EditTask from './EditTask'
const TodosList = ({todos} ) => {
    const task = useSelector(state => state.todos)
  const dispatch = useDispatch()
    return (
        <div>
            {task.map((todos) => <div >
              
                <h1 style={{textDecoration: todos.done && "line-through"}}>{todos.task}</h1>
                <button class="button-27" role="button" onClick={()=> dispatch (donetask(todos.id))}>{todos.done?"undone":"Done"}</button>
                 <EditTask todos={todos}/> 
                 <button class="button-27" role="button"  onClick={()=> dispatch (deletetask(todos.id))}>  Delete </button>
              
            </div>)}
        </div>
    )
}
export default TodosList




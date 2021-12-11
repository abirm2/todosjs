import React, { useState } from 'react'
import { useDispatch}  from 'react-redux'
import  { addtask } from '../todos/action'
const AddTask = (props) => {
    
    const [task, setTask] = useState('');
  
    const  dispatch = useDispatch();
    return (
    <form onSubmit={(e)=>{
        
        e.preventDefault()
        dispatch(addtask({id:Math.random(),task,done:false}))}}>
  
    <div>
        <label htmlFor="Content"> <h1>task</h1></label>
        <input type="text"  onChange={e => setTask(e.target.value)} />
        
       
    </div>
    <div>
        <input type="submit" value="Add" />
    </div>


</form>)

    
    }
export default AddTask

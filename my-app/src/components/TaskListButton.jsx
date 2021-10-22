import React,{ useContext, useEffect, useState,ReactPropTypes }  from 'react'
import { TaskContext } from '../context/TasksContext';

const TaskListButton = (props) => {
    const {removeTask,updateTaskData} = useContext(TaskContext)
    const [value,setValue] = useState('')
    const data= props.data

    function updateHandler(id,content){
        updateTaskData(id,{task:content})
    }
    function removeHandler (id){
        removeTask(id)
    }
    function inputUpdateHandler(e){
        setValue(e.target.value)
    }
    return (
        <div>
                    <button onClick={()=>updateHandler(data._id,value)} className="edit list-btn">EDIT</button>
                    <button onClick={()=>removeHandler(data._id)} className="danger list-btn">DEL</button>
                    <input type="text" value={value} onChange={inputUpdateHandler} />
        </div>
    )
}

export default TaskListButton

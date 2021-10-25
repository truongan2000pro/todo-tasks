import React,{ useContext, useEffect, useState,ReactPropTypes }  from 'react'
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TasksContext';

const TaskListButton = (props) => {
    const {removeTask,updateTaskData,getTasksData} = useContext(TaskContext)
    const {token} = useContext(AuthContext)
    const [value,setValue] = useState('')
    const data= props.data
    async function updateHandler(id,content,token){
        await updateTaskData(id,{task:content},token)
        getTasksData(token)
    }
    async function removeHandler (id,token){
        await removeTask(id,token)
        getTasksData(token)
    }
    function inputUpdateHandler(e){
        setValue(e.target.value)
    }
    return (
        <div>
                    <button onClick={()=>updateHandler(data._id,value,token)} className="edit list-btn">EDIT</button>
                    <button onClick={()=>removeHandler(data._id,token)} className="danger list-btn">DEL</button>
                    <input type="text" value={value} onChange={inputUpdateHandler} />
        </div>
    )
}

export default TaskListButton

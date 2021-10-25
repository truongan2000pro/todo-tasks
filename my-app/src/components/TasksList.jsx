import React, { useContext, useEffect, useState } from 'react'
import { ReactPropTypes } from 'react'
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TasksContext';
import TaskListButton from './TaskListButton';

const TasksList = (props) => {
    const {getTasksData, tasksState} = useContext(TaskContext)
    const {token,signOutHandler} = useContext(AuthContext)
    const datas= tasksState.data
    useEffect( () => {
       getTasksData(token)
    },[]);

    return (
        <div className="tasks-list-container">
            { datas.map(data =>{
                
            return<div key={data._id} className="tasks-list-wrapper">
                    <div className="task">{data.task}
                    </div>
                    <TaskListButton data={data}></TaskListButton>   
                </div> 
         
            }) }
            <button onClick={signOutHandler} className="danger list-btn" style={{ maxWidth: '100px', margin:'250px auto 10px auto',minHeight:'50px'}}>Sign Out</button>
            
        </div>
    )
}

export default TasksList

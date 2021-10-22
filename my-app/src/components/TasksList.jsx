import React, { useContext, useEffect, useState } from 'react'
import { ReactPropTypes } from 'react'
import { TaskContext } from '../context/TasksContext';
import TaskListButton from './TaskListButton';

const TasksList = (props) => {
    const {getTasksData, tasksState} = useContext(TaskContext)
    const datas= tasksState.data

    useEffect( () => {
        getTasksData()
    },[tasksState]);


    return (
        <div className="tasks-list-container">
            { datas.map(data =>{
                
            return<div key={data._id} className="tasks-list-wrapper">
                    <div className="task">{data.task}
                    </div>
                    <TaskListButton data={data}></TaskListButton>   
                </div> 
         
            }) }
            
        </div>
    )
}

export default TasksList

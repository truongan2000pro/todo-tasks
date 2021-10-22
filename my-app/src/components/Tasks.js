import React, { useEffect, useState } from 'react'
import TasksList from './TasksList'
import TasksInput from './TasksInput.jsx'
const Tasks = () => {
    return (
      <div className="tasks-container">  
          <div className="tasks-wrapper">
            <TasksInput/>
            <TasksList />
          </div>
      </div>  
    )
}

export default Tasks

import React,{useState,useContext} from 'react'
import { TaskContext } from '../context/TasksContext'
import { AuthContext } from '../context/AuthContext';


const TasksInput = () => {
    const {addTaskData,getTasksData} = useContext(TaskContext)
    const {token} =useContext(AuthContext)
    const [input,setInput] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        addTaskData({task:input,token})
        getTasksData(token)

        
    }
    const handleUserInput= e  =>{
        setInput(e.target.value)
    }
    return (
        <div className="tasks-input-container" >
            <span className="tasks-title" >Todo Tasks</span>
            <form className="todo-task" onSubmit={handleSubmit}>
                <input type="text" placeholder="ADD YOUR NEW TASK" value={input} onChange={handleUserInput} name="task"/>
                <button type="submit"className="task-btn button-24">ADD</button>
            </form>
        </div>
    )
}

export default TasksInput

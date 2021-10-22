import React, { Children, createContext } from 'react'
import { useReducer } from 'react'
import { TasksReducer } from '../reducer/TasksReducer'
import { DELETE_TASK, GET_TASKS, POST_TASK ,UPDATE_TASK} from '../reducer/Type'
import { addTask,getTasks,updateTask,deleteTask } from '../services/taskServies'

export const TaskContext = createContext()

const TaskContextProvider = ({children})=>{
    
    const [tasksState,dispatch] = useReducer(TasksReducer,{
        data:[]
    }) 
    
    async function getTasksData(){
        const data = await getTasks()
        dispatch({
            type: GET_TASKS,
            payload:data.data
        })
   

    }
    async function addTaskData(task){
        const data = await addTask(task)
        dispatch({
            type:POST_TASK,
            payload:data.data
        })
    }
    async function removeTask(taskId){
        await deleteTask(taskId)
        const data = tasksState.data.filter(task => task._id != taskId)
        dispatch({
            type:DELETE_TASK,
            payload:data

        })
    }

    async function updateTaskData(id,content){
        const data= await updateTask(id,content)
        console.log(data)
        dispatch({
            type:UPDATE_TASK,
            payload:data.data
        })

    }
    const TaskContextData={
        tasksState,getTasksData,addTaskData,removeTask,updateTaskData
    } 
   
    return (<TaskContext.Provider value ={TaskContextData} >{children}</TaskContext.Provider>)
}

export default TaskContextProvider
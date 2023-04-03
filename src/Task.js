import './App.css';
import { useState } from 'react';
import deleteImg from './images/deleteImg.png'
import check from './images/check.png'

function Task() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")


  const handleChange = (event) =>{
   setNewTask(event.target.value)
  }

  const addTask = () =>{
    const newTaskObj = {
      task: newTask,
      completed: false,
    }
    setTodoList([...todoList, newTaskObj])
  }

  const deleteTask = (keyid) =>{
      //  const newTodoList = todoList.filter((task, key) =>{
      //  return key === keyid ? false : true
      //  })
        
       setTodoList(todoList.filter((task, key) =>{
        return key === keyid ? false : true
        }))
       }

    const completeTask = (keyid)  =>{
        setTodoList(
            todoList.map((task, key) =>{
            // return key === keyid ? { ...task, completed: true } : true
            if(key === keyid){
                return{...task, completed : true}
            } else{
                return task;
            }
            }))
    }   
     
   
  return (
    <div className="task">
        <h1>Todo App</h1>
      <div className='addTask'>
        <input  onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        <ul className='task'>
          {
           todoList.map((task, key) =>{
            
            return(
              <li key={key} style={{textDecoration: task.completed ? "line-through": "none"}}>
              {task.task} 
              <div className='listTackBtn'>
              <button onClick={() => deleteTask(key)}><img src={deleteImg} alt="delete"/></button>
              <button onClick={() => completeTask(key)} completed={task.toString} className='checkBtn'><img src={check} alt="check"/></button>
              </div>
              </li>
              
            )
           })
          }
        </ul>
      </div>

    </div>
  );
}

export default Task;

import React , {useState}from "react";
import { Task } from "../types/types";
import { Link } from "react-router-dom";
export default function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addItem = (e : any) => {
        
        e.preventDefault();
        if (e.target.todo.value !== "") {
            const id = tasks.length + 1;
            const todo = JSON.stringify(e.target.todo.value)
            
            const task:Task = {id: id, title: todo, completed: false};
            setTasks([...tasks, task]);
        }
        else {
            console.log("Please enter title");
        }
    console.log(tasks)
    }
    const updateStatus = (data: Task) => {
        const temp:Task = {...data,  completed: !data.completed};
        return temp;
    }
    const setStatus= (status: Task) => {
        setTasks(tasks.map((task) => (task.id === status.id ? updateStatus(task) : task)));
    }
    return (
        <div>
            <h1>Todo List Main Page</h1>
            {tasks.map((task) => <div>
                <label>{task.title}</label>
                <input type="checkbox" id="myCheck" checked={task.completed} onChange={()=> setStatus(task)}></input>
            </div>)}
            <form onSubmit={addItem}>
                <label>title: </label>
                <input name="todo"></input>
                <button type = "submit">Add</button>
            </form>
            <Link to="/">Back To Home</Link>
        </div>
    )
}
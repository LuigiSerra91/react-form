import { useState } from "react";
import data from '../data/post.js'
export default function AppMain(){
    const [task, setTask] = useState(data)
    const[newTask, setNewTask] = useState('')

    function addTask(e) {
        e.preventDefault()

        setTask([
            ...task,
            newTask
        ])

        setNewTask('')
    }





    return (
        <>
        
        <main>
            <div className="container">
                
            </div>
        </main>
        
        
        </>
    )
}
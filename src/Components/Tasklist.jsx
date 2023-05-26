import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskCard from './TaskCard'
import "./Css/TaskList.css"

function Tasklist() {
    const [tasks, setTasks] = useState([])
    const [statusUpdated, setStatusUpdated] = useState([])

    function updateTask(index, updatedTask) {
        const updatedTasks = [...tasks]
        updatedTasks[index] = updatedTask
        setTasks(updatedTasks)
    }

    function updateTaskTwo(index, updatedTask) {
        const updatedTasks = [...statusUpdated]
        updatedTasks[index] = updatedTask
        setStatusUpdated(updatedTasks)
    }


    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)

        setTasks(updatedTasks)
    }
    function deleteTaskUpdate(index) {
        const updatedTasks = statusUpdated.filter((_, i) => i !== index)
        setStatusUpdated(updatedTasks)
    }

    function moveTask(index) {
        const updatedTasks = [...tasks]
        updatedTasks[index] = { ...updatedTasks[index], list: "completed" }
        const completedTasks = updatedTasks.filter((task) => { return task.list === "completed" })
        const pendingTasks = updatedTasks.filter((task) => task.list !== "completed")
        setStatusUpdated([completedTasks])
        setTasks(pendingTasks)
    }

    function moveTaskTwo(index) {
        const updatedTasks = [...tasks]
        updatedTasks[index] = { ...updatedTasks[index], list: "pending" }
        const completedTasks = updatedTasks.filter((task) => { return task.list === "completed" })
        const pendingTasks = updatedTasks.filter((task) => task.list !== "completed")
        setStatusUpdated([...statusUpdated, completedTasks])
        setTasks(pendingTasks)
    }

    return (
        <>
            <AddTaskForm taskByData={setTasks} />

            <div className="containersOflist">
                <div className="taskListOne">
                    <h2>pending Task</h2>
                    {tasks.map((data, index) => (
                        <TaskCard
                            key={index}
                            {...data}
                            onUpdate={(updatedTask) => updateTask(index, updatedTask)}
                            onDelete={() => deleteTask(index)}
                            onMove={() => moveTask(index)}
                        />
                    ))}
                </div>

                <div className="taskListTwo">
                    <h2>Compeleted Task</h2>
                    {statusUpdated.map((data, index) => (
                        <TaskCard
                            key={index}
                            {...data}
                            onUpdate={(updatedTask) => updateTaskTwo(index, updatedTask)}
                            onDelete={() => deleteTaskUpdate(index)}
                            onMove={() => moveTaskTwo(index)}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Tasklist;


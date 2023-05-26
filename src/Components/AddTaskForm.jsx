import React, { useState, useEffect } from 'react'
import './Css/AddTaskForm.css'

function AddTaskForm({ taskByData }) {
  const [taskData, setTaskData] = useState([])
  const [taskName, setTaskName] = useState('')
  const [taskDes, setTaskDes] = useState('')
  const [taskList, setTaskList] = useState('')

  function addData(e) {
    e.preventDefault();
    const task = {
      name: taskName,
      description: taskDes,
      list: taskList,
    };
    setTaskData((prevTaskData) => [...prevTaskData, task]);
    taskByData([...taskData, task]);
  }
  
  useEffect(() => {
    console.log(taskData)
  }, [taskData])

  return (
    <form className="wrapper" onSubmit={addData}>
      <input
        type="text"
        required
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter your task Name"
      />
      <input
        type="text"
        required
        value={taskDes}
        onChange={(e) => setTaskDes(e.target.value)}
        placeholder="Enter task Description"
      />
      <select value={taskList} required onChange={(e) => setTaskList(e.target.value)}>
        <option value="" disabled hidden>
          Please select one
        </option>
        <option value="completed">Task Completed</option>
        <option value="pending">Task Pending</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskForm

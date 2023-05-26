import React, { useState } from 'react'
import "./Css/TaskCard.css"

function TaskCard({ name, description, list, onUpdate, onDelete, onMove }) {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedName, setUpdatedName] = useState(name)
  const [updatedDescription, setUpdatedDescription] = useState(description)
  const [updatedList, setUpdatedList] = useState(list)

  function handleUpdate() {
    const updatedTask = {
      name: updatedName,
      description: updatedDescription,
      list: updatedList
    }
    onUpdate(updatedTask)
    setIsEditing(false)
  }

  return (
    <div className="cardWrapper">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <input
            type="text"
            value={updatedList}
            onChange={(e) => setUpdatedList(e.target.value)}
          />
          <div className="buttons">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="taskName"><span style={{ color: "red" }}>Name:)</span>{name}</div>
          <p className="taskDescription"><span style={{ color: "orange" }}>Description:-)</span>{description}</p>
          <p className="taskList"><span style={{ color: "green" }}>Status:-)</span>{list}</p>
          <div className="buttons">
            <button className="update" onClick={() => setIsEditing(true)}>Update Task</button>
            <button className="delete" onClick={onDelete}>Delete Task</button>
            <button onClick={() => onMove("newList")}>Move Task</button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskCard

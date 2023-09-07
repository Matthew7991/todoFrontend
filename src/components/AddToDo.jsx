import React, { useState } from "react"

function AddToDo({ reload }) {
  const [task, setTask] = useState("")

  const addTodo = (event) => {
    event.preventDefault()
    if (task)
      fetch("http://localhost:9000/api/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: crypto.randomUUID(), task, done: false }),
      }).then((response) => {
        // console.log(response)
        reload((prev) => !prev)
      })
  }

  return (
    <form className="flex gap-2 mb-4">
      <input
        className="border"
        type="text"
        name="task"
        placeholder="Neues TODO"
        onChange={(event) => setTask(event.target.value)}
      />
      <button
        className="px-2 bg-blue-700 aspect-square"
        onClick={addTodo}>
        +
      </button>
    </form>
  )
}

export default AddToDo

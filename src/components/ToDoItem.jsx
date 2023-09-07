import React from "react"

function ToDoItem({ todo, reload }) {
  const updateTodo = () => {
    fetch("http://localhost:9000/api/todos", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...todo, done: !todo.done }),
    }).then((response) => {
      // console.log(response)
      reload((prev) => !prev)
    })
  }

  const deleteTodo = () => {
    fetch("http://localhost:9000/api/todos", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => {
      // console.log(response)
      reload((prev) => !prev)
    })
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={updateTodo}
        className={
          (todo.done ? "bg-green-500 text-green-500" : "") +
          " border-none text-2xl w-full"
        }>
        {todo.task}
      </button>
      <button
        onClick={deleteTodo}
        className="px-2 bg-red-600 aspect-square">
        X
      </button>
    </div>
  )
}

export default ToDoItem

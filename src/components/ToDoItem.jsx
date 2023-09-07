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

  return (
    <button
      onClick={updateTodo}
      className={
        (todo.done ? "bg-green-500 text-green-500" : "") +
        " border-none text-2xl w-full"
      }>
      {todo.task}
    </button>
  )
}

export default ToDoItem

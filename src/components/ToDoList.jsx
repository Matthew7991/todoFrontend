import React, { useEffect, useState } from "react"
import AddToDo from "./AddToDo"
import ToDoItem from "./ToDoItem"

function ToDoList() {
  const [todos, setTodos] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9000/api/todos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setTodos(data)
      })
  }, [refresh])

  return (
    <section className="p-4 w-fit">
      <AddToDo reload={setRefresh} />
      <div className="flex flex-col gap-2">
        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              reload={setRefresh}
              todo={todo}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ToDoList

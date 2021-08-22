import React, { useState } from 'react'
import './App.css'
import { CompletedTodos } from './components/CompletedTodos'
import { NotCompletedTodos, Todo } from './components/NotCompletedTodos'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (todoText: string) => {
    const newTodo: Todo = {
      isCompleted: false,
      text: todoText,
      id: uuidv4(),
    }
    setTodos([newTodo, ...todos])
  }

  const handleDelete = (deletedTodo: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== deletedTodo.id))
  }

  const handleToggle = (toggledTodo: Todo) => {
    const todo = todos.find((todo) => todo.id === toggledTodo.id)

    if (todo) {
      todo.isCompleted = !todo.isCompleted
      setTodos([...todos])
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    const notCompletedTodos = todos.filter((todo) => !todo.isCompleted)

    const movedTodo = notCompletedTodos[oldIndex]

    const deleteMovedTodo = () => {
      let movedTodoIndex = todos.findIndex((todo) => todo.id === movedTodo.id)
      todos.splice(movedTodoIndex, 1)
      notCompletedTodos.splice(oldIndex, 1)
    }

    const getNewIndexOfTodo = () => {
      let newIndexOfTodo = 0

      let prevTodo = notCompletedTodos[newIndex - 1]
      if (prevTodo) {
        let prevTodoIndex = todos.findIndex((todo) => todo.id === prevTodo.id)
        newIndexOfTodo = prevTodoIndex + 1
      }

      return newIndexOfTodo
    }

    deleteMovedTodo()
    const newIndexOfMovedTodo = getNewIndexOfTodo()

    todos.splice(newIndexOfMovedTodo, 0, movedTodo)

    setTodos([...todos])
  }

  return (
    <div className="App">
      <TodoForm onSubmit={handleSubmit} />
      <NotCompletedTodos
        todos={todos}
        onDelete={handleDelete}
        onToggleTodo={handleToggle}
        onSortEnd={onSortEnd}
      ></NotCompletedTodos>
      <CompletedTodos todos={todos} onUncheckTodo={handleToggle} onDeleteTodo={handleDelete} />
    </div>
  )
}

export default App

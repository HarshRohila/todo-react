import React from 'react'
import { Todo } from './NotCompletedTodos'

export default function TodoItem(props: {
  todo: Todo
  onToggleTodo: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}): JSX.Element {
  const { todo, onToggleTodo, onDelete } = props

  return (
    <>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => onToggleTodo(todo)} />
      <p className="todo-text" style={{ display: 'inline' }}>
        {todo.text}
      </p>
      <button className="delete-btn" onClick={() => onDelete(todo)}>
        X
      </button>
    </>
  )
}

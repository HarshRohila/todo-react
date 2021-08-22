import React from 'react'
import { Todo } from './NotCompletedTodos'
import TodoItem from './TodoItem'

type CompletedTodosProps = {
  todos: Todo[]
  onUncheckTodo: (todo: Todo) => void
  onDeleteTodo: (todo: Todo) => void
}

export const CompletedTodos = ({ todos, onUncheckTodo, onDeleteTodo }: CompletedTodosProps) => {
  const completedTodos = todos.filter((todo) => todo.isCompleted)

  return (
    <ul>
      {completedTodos.map((todo) => (
        <li key={todo.id} className="completed-todo">
          <TodoItem
            todo={todo}
            onToggleTodo={() => onUncheckTodo(todo)}
            onDelete={(todo) => onDeleteTodo(todo)}
          />
        </li>
      ))}
    </ul>
  )
}

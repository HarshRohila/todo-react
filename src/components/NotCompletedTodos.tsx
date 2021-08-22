import React from 'react'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  SortEndHandler,
} from 'react-sortable-hoc'
import TodoItem from './TodoItem'

type ListProps = {
  todos: Todo[]
  onDelete: (todo: Todo) => void
  onToggleTodo: (todo: Todo) => void
  onSortEnd?: SortEndHandler
}

export const NotCompletedTodos = ({ todos, onDelete, onToggleTodo, onSortEnd }: ListProps) => {
  const notCompletedTodos = todos.filter((todo) => !todo.isCompleted)

  return (
    <>
      <MySortableList onSortEnd={onSortEnd} useDragHandle>
        {notCompletedTodos.map((todo, idx) => (
          <SortableItem
            index={idx}
            key={todo.id}
            component={<TodoItem todo={todo} onToggleTodo={onToggleTodo} onDelete={onDelete} />}
          />
        ))}
      </MySortableList>
    </>
  )
}

export interface Todo {
  isCompleted: boolean
  text: string
  id: string
}

const DragHandle = SortableHandle(() => <span className="handle">::</span>)

const SortableItem = SortableElement(({ component }: { component: JSX.Element }) => (
  <li className="sortable-item">
    <DragHandle />
    {component}
  </li>
))

const MySortableList = SortableContainer(({ children }: { children: JSX.Element[] }) => {
  return <ul>{children}</ul>
})

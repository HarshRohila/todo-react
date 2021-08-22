import React from 'react'

type InfoProps = {}

export const Info = ({}: InfoProps) => {
  return (
    <div className="features">
      <a href="https://github.com/HarshRohila/todo-react">Github</a>
      <h1>Features</h1>
      <ul>
        <li>Add todo</li>
        <li>Checkbox to toggle if todo is completed</li>
        <li>Completed todo shift to bottom of list</li>
        <li>X button to delete a todo</li>
        <li>Not completed todos can be rearranged using handle</li>
      </ul>
    </div>
  )
}

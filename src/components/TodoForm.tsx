import React, { FormEvent, useState } from 'react'

interface TodoFormProps {
  onSubmit: (todoText: string) => void
}
export default function TodoForm({ onSubmit }: TodoFormProps): JSX.Element {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (todoText) {
      const text = todoText
      setTodoText('')
      onSubmit(text)
    }
  }

  const [todoText, setTodoText] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={todoText}
        placeholder="Enter Todo"
        onChange={({ target }) => setTodoText(target.value)}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  )
}

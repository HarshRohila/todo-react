// @ts-nocheck
import React, { useState } from 'react'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'

type SortableListProps = {}
const DragHandle = SortableHandle(() => <span>::</span>)
const SortableItem = SortableElement(({ value }) => (
  <li>
    <DragHandle />
    {value}
  </li>
))
const MySortableList = SortableContainer(({ children }) => {
  return <ul>{children}</ul>
})

export const SortableList = ({}: SortableListProps) => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex))
  }

  return (
    <MySortableList onSortEnd={onSortEnd} useDragHandle>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </MySortableList>
  )
}

import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'


export default function TodoBox () {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.todobox,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))



  return (
    <div
    style={{
      width: '15vw',
      height: '9vh',
      borderRadius: '20px',
      backgroundColor: '#ebe5d1',
      margin:'5px',
      textAlign:'center',
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move',
    }}
    ref={drag}
    >
    Todo2
    </div>

  )
}
import React from 'react'
import eventColor from '../../utils/eventColor'
import { setSelectedBox } from '../../redux/Slices/EventSlice'
import { useDispatch } from 'react-redux'

const Tasks = ({ task }) => {
  const color = eventColor(task.category)
  const dispatch = useDispatch()

  const handleDragStart = e => {
    if (e.target.draggable) {
      dispatch(setSelectedBox({ title: task.title, category: task.category }))
    }
  }
  return (
    <div
      className='w-full p-2 border-1 border-gray-300 my-1 rounded-sm'
      draggable={true}
      onDragStart={handleDragStart}
      key={task._id}
      style={{
        backgroundColor: color.bgColor,
        borderColor: color.color,
        color: color.color
      }}
    >
      {task.title}
    </div>
  )
}

export default Tasks

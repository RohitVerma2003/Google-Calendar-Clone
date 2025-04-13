import React from 'react'
import eventColor from '../../utils/eventColor'
import useGetTasks from '../../hooks/useGetTasks'

const Goals = ({ goal }) => {
  const color = eventColor(goal.category)
  const { getTasks } = useGetTasks()

  const handleClick = async goalsId => {
    await getTasks(goalsId)
  }

  return (
    <div
      className='w-full p-2 border-1 border-gray-300 rounded-sm my-1 cursor-pointer'
      style={{
        backgroundColor: color.bgColor,
        borderColor: color.color,
        color: color.color
      }}
      key={goal._id}
      onClick={() => handleClick(goal._id)}
    >
      {goal.title}
    </div>
  )
}

export default Goals

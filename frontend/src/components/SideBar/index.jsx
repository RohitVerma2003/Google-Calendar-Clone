import React from 'react'
import { useSelector } from 'react-redux'

import Goals from '../Goals'
import Tasks from '../Tasks'

const SideBar = () => {
  const { goals, tasks } = useSelector(state => state.goalsAndTasksSlice)
  

  return (
    <div className='max-lg:hidden md:fixed w-1/5 h-full bg-gray-100 top-0 left-0 p-2 font-mono'>
      <div className='text-lg font-semibold p-2 w-full'>Goals</div>
      <div className='w-full h-auto'>
        {goals.map(goal => (
          <Goals goal={goal} key={goal._id}/>
        ))}
      </div>

      <div>
        <div className='text-lg font-semibold p-2 w-full'>Tasks</div>
        <div className='w-full h-auto'>
          {tasks.map(task => (
            <Tasks task={task} key={task._id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar

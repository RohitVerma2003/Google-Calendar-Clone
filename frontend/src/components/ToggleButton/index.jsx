import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsWeek } from '../../redux/Slices/CalendarDataSlice'

const ToggleButton = () => {
  const { isWeek } = useSelector(state => state.calendarData)
  const dispatch = useDispatch()

  return (
    <div className='w-full p-1 bg-gray-100 font-mono flex gap-2 rounded-sm'>
      <div
        className={`w-20 ${
          isWeek ? 'bg-blue-400 text-white' : ''
        } px-2 py-1 rounded-sm text-center cursor-pointer`}
        onClick={() => dispatch(setIsWeek(true))}
      >
        Week
      </div>
      <div
        className={`w-20 ${
          !isWeek ? 'bg-blue-400 text-white' : ''
        } px-2 py-1 rounded-sm text-center cursor-pointer`}
        onClick={() => dispatch(setIsWeek(false))}
      >
        Day
      </div>
    </div>
  )
}

export default ToggleButton

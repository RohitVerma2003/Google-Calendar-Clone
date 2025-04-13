import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setDate,
  setMonth,
  setYear
} from '../../redux/Slices/CalendarDataSlice'
import ToggleButton from '../ToggleButton'

const Header = () => {
  const { month, year, date, isWeek } = useSelector(state => state.calendarData)
  const dispatch = useDispatch()

  const handleInputYear = e => {
    dispatch(setYear(e.target.value))
  }

  const handleInputMonth = e => {
    dispatch(setMonth(e.target.value))
  }

  const handleInput = e => {
    const value = e.target.value
    const yearValue = new Date(value).getFullYear()
    const monthValue = new Date(value).getMonth()
    const dateValue = new Date(value).getDate()

    dispatch(setDate(dateValue))
    dispatch(setMonth(monthValue))
    dispatch(setYear(yearValue))
  }

  return (
    <div className='w-3/4 m-3 flex flex-wrap gap-5 items-center p-2 rounded-md md:float-end'>
      {isWeek ? (
        <>
          {' '}
          <div>
            <select
              name='month'
              id='month'
              className='w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-2 rounded-sm'
              onInput={handleInputMonth}
              value={month}
            >
              <option value='0' defaultChecked={month === 0}>
                January
              </option>
              <option value='1' defaultChecked={month === 1}>
                February
              </option>
              <option value='2' defaultChecked={month === 2}>
                March
              </option>
              <option value='3' defaultChecked={month === 3}>
                April
              </option>
              <option value='4' defaultChecked={month === 4}>
                May
              </option>
              <option value='5' defaultChecked={month === 5}>
                June
              </option>
              <option value='6' defaultChecked={month === 6}>
                July
              </option>
              <option value='7' defaultChecked={month === 7}>
                August
              </option>
              <option value='8' defaultChecked={month === 8}>
                September
              </option>
              <option value='9' defaultChecked={month === 9}>
                October
              </option>
              <option value='10' defaultChecked={month === 10}>
                November
              </option>
              <option value='11' defaultChecked={month === 11}>
                December
              </option>
            </select>
          </div>
          <div>
            <input
              type='number'
              min={1990}
              max={2099}
              value={year}
              onInput={handleInputYear}
              className='w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-2 rounded-sm'
            />
          </div>
        </>
      ) : (
        <input
          type='date'
          id='date'
          className=' border-1 border-gray-400 outline-none focus:outline-none h-10 p-1 rounded-sm'
          onInput={handleInput}
        />
      )}
      <div>
        <ToggleButton />
      </div>
    </div>
  )
}

export default Header

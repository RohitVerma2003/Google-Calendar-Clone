import React from 'react'
import dayjs from 'dayjs'
import DragBox from '../DragBox'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedBox,
  setSelectedBoxType
} from '../../redux/Slices/EventSlice'
import useUpdateEvent from '../../hooks/useUpdateEvent'
import useGetEvents from '../../hooks/useGetEvents'
import useCreateEvent from '../../hooks/useCreateEvent'

const WeekBox = ({ w_index, day }) => {
  const dispatch = useDispatch()
  const { event, selectedBox } = useSelector(state => state.eventData)
  const { updateEvent } = useUpdateEvent()
  const { getEvents } = useGetEvents()
  const { createEvent } = useCreateEvent()

  const findEvents = (date, time) => {
    const arr = event.filter(ele => {
      const startDate = String(dayjs(ele.dateStart).$d).substring(0, 10)
      const startTime = new Date(ele.dateStart).getHours()
      return startDate === date && startTime === time
    })
    return arr
  }

  const handleDrop = async e => {
    const fullDateStr = `${e.target.dataset.date} 2025 ${e.target.dataset.start_time}:00:00`
    const fullEndDateStr = `${e.target.dataset.date} 2025 ${
      (Number(e.target.dataset.start_time) + 1) % 24
    }:00:00`
    console.log(fullDateStr)
    console.log(fullEndDateStr)
    const newEvent = {
      _id: selectedBox?._id,
      dateStart: new Date(fullDateStr).toISOString(),
      dateEnd: new Date(fullEndDateStr).toISOString(),
      title: selectedBox.title,
      category: selectedBox.category
    }
    console.log(newEvent)

    try {
      if (selectedBox._id) await updateEvent(newEvent)
      else await createEvent(newEvent)
    } catch (error) {
      console.log(error)
    } finally {
      getEvents()
    }

    dispatch(setSelectedBox(null))
    dispatch(setSelectedBoxType(null))
  }

  const isToday = date => {
    return (
      String(date).substring(0, 10) ===
      String(dayjs(new Date().toISOString()).$d).substring(0, 10)
    )
  }

  return (
    <div key={w_index} className='w-50 h-full border-1 border-gray-200'>
      <div
        className={`h-20 px-2 border-b-1 border-b-gray-200 ${
          isToday(day.$d) ? 'bg-blue-200' : ''
        }`}
      >
        <div className='flex justify-start gap-3 '>
          <div>{String(day.$d).substring(4, 7)}</div>
          <div>{String(day.$d).substring(0, 4)}</div>
        </div>
        <div className='text-xl'>{String(day.$d).substring(8, 10)}</div>
      </div>
      <div className='w-full h-full'>
        {new Array(24).fill('date').map((ele, t_index) => (
          <div
            key={t_index}
            className='w-50 h-20 border-b-1 flex border-b-gray-200'
            data-date={String(day.$d).substring(0, 10)}
            data-start_time={t_index}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
          >
            {findEvents(String(day.$d).substring(0, 10), t_index).map(ele => (
              <DragBox
                key={ele._id}
                ele={ele}
                date={String(day.$d).substring(0, 10)}
                t_index={t_index}
                handleDrop={handleDrop}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeekBox

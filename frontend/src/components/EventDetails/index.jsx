import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedEvent } from '../../redux/Slices/EventSlice'
import dayjs from 'dayjs'
import getTime from '../../utils/timeFormat'
import useDeleteEvent from '../../hooks/useDeleteEvent'
import useGetEvents from '../../hooks/useGetEvents'

const EventDetails = () => {
  const { selectedEvent } = useSelector(state => state.eventData)
  const dispatch = useDispatch()
  const { deleteEvent } = useDeleteEvent()
  const { getEvents } = useGetEvents()

  const startTime = getTime(
    String(dayjs(selectedEvent?.dateStart)?.$d)?.substring(16, 18)
  )

  const endTime = getTime(
    String(dayjs(selectedEvent?.dateEnd)?.$d)?.substring(16, 18)
  )

  const handleDelete = async () => {
    await deleteEvent(selectedEvent._id)
    await getEvents()
    dispatch(setSelectedEvent(null))
  }

  return (
    <div className='fixed inset-0 z-50  backdrop-blur-sm flex items-center justify-center font-mono'>
      <div className='w-3/4 md:w-1/4 h-auto bg-white shadow-md p-3 rounded-md'>
        <div className='text-xl font-extrabold'>{selectedEvent.title}</div>
        <div className='mt-5'>
          Start :{' '}
          {String(dayjs(selectedEvent.dateStart).$d).substring(0, 10) +
            ' ' +
            startTime.time +
            String(dayjs(selectedEvent.dateStart).$d).substring(18, 21) +
            startTime.format}
        </div>
        <div className=''>
          End :{' '}
          {String(dayjs(selectedEvent.dateEnd).$d).substring(0, 10) +
            ' ' +
            endTime.time +
            String(dayjs(selectedEvent.dateEnd).$d).substring(18, 21) +
            endTime.format}
        </div>
        <div className=''>Category : {selectedEvent.category}</div>
        <div className='w-full flex gap-3'>
          <button
            onClick={() => {
              dispatch(setSelectedEvent(null))
            }}
            className='mt-5 bg-gray-200 p-2 rounded-sm cursor-pointer'
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className='mt-5 bg-red-200 p-2 rounded-sm text-red-700 cursor-pointer'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails

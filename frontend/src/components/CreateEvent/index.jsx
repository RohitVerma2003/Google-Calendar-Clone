import React, { useState } from 'react'
import useCreateEvent from '../../hooks/useCreateEvent'
import useGetEvents from '../../hooks/useGetEvents'
import { useDispatch, useSelector } from 'react-redux'
import { setShowCreateEvent } from '../../redux/Slices/EventSlice'

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Exercise',
    start_time: '',
    end_time: ''
  })
  const { createEvent } = useCreateEvent()
  const { getEvents } = useGetEvents()
  const { showCreateEvent } = useSelector(state => state.eventData)
  const dispatch = useDispatch()

  const handleInput = e => {
    const { id, value } = e.target
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      title: formData.title,
      category: formData.category,
      dateStart: formData.start_time,
      dateEnd: formData.end_time
    }
    await createEvent(data)
    await getEvents()
    setFormData({
      title: '',
      category: 'Exercise',
      start_time: '',
      end_time: ''
    })
    dispatch(setShowCreateEvent(false))
  }

  return (
    <>
      {showCreateEvent ? (
        <div className='fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center font-mono'>
          <div className='w-3/4 md:w-1/4 h-auto bg-white p-3 shadow-md rounded-md'>
            <div className='w-full flex justify-between items-center'>
              <div className='text-lg font-bold'>Create New Event</div>
            </div>
            <form className='mt-5' onSubmit={handleSubmit}>
              <div className='my-2'>
                <p>
                  <label for='title' className='text-sm font-bold'>
                    Title
                  </label>
                </p>
                <input
                  type='text'
                  id='title'
                  placeholder='Event Title'
                  className=' w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-1 rounded-sm'
                  required={true}
                  onInput={handleInput}
                  value={formData.title}
                />
              </div>
              <div className='my-2'>
                <p>
                  <label for='category' className='text-sm font-bold'>
                    Category
                  </label>
                </p>
                <select
                  name='category'
                  id='category'
                  className='w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-1 rounded-sm'
                  required={true}
                  onInput={handleInput}
                  value={formData.category}
                >
                  <option value='Exercise' defaultChecked>
                    Exercise
                  </option>
                  <option value='Eating'>Eating</option>
                  <option value='Work'>Work</option>
                  <option value='Relax'>Relax</option>
                  <option value='Family'>Family</option>
                  <option value='Social'>Social</option>
                </select>
              </div>
              <div className='my-2'>
                <p>
                  <label for='start_time' className='text-sm font-bold'>
                    Start Time
                  </label>
                </p>
                <input
                  type='datetime-local'
                  id='start_time'
                  className=' w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-1 rounded-sm'
                  required={true}
                  onInput={handleInput}
                  value={formData.start_time}
                />
              </div>
              <div className='my-2'>
                <p>
                  <label for='end_time' className='text-sm font-bold'>
                    End Time
                  </label>
                </p>
                <input
                  type='datetime-local'
                  id='end_time'
                  className=' w-full border-1 border-gray-400 outline-none focus:outline-none h-10 p-1 rounded-sm'
                  required={true}
                  onInput={handleInput}
                  value={formData.end_time}
                />
              </div>
              <div className='flex gap-3 justify-end items-center'>
                <button
                  className='border-1 border-gray-400 rounded-sm text-sm p-2 font-bold cursor-pointer'
                  onClick={() => dispatch(setShowCreateEvent(false))}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='border-1 border-gray-400 rounded-sm text-sm p-2 font-bold bg-blue-400 text-white cursor-pointer'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div
          className='w-20 h-20 fixed md:bottom-5 bottom-10 right-5 bg-white p-2 rounded-md shadow-xl flex justify-center items-center cursor-pointer'
          onClick={() => {
            dispatch(setShowCreateEvent(true))
          }}
        >
          <img src='./plus.png' alt='plus_icon' />
        </div>
      )}
    </>
  )
}

export default CreateEvent

import { useEffect } from 'react'
import './App.css'
import WeekBox from './components/WeekBox'
import { useSelector } from 'react-redux'
import useMonthCalendar from './hooks/useMonthCalendar'
import useGetEvents from './hooks/useGetEvents'
import Loader from './components/Loader'
import CreateEvent from './components/CreateEvent'
import getTime from './utils/timeFormat'
import Header from './components/Header'
import EventDetails from './components/EventDetails'
import SideBar from './components/SideBar'
import useGetGoals from './hooks/useGetGoals'

function App () {
  const { data, year, month, date, isWeek, loading } = useSelector(
    state => state.calendarData
  )
  const { event, selectedEvent } = useSelector(state => state.eventData)

  const { getCalendarData } = useMonthCalendar()
  const { getEvents } = useGetEvents()
  const { getGoals } = useGetGoals()

  useEffect(() => {
    const getInitials = async () => {
      getCalendarData()
      await getEvents()
      await getGoals()
    }
    getInitials()
  }, [])

  useEffect(() => {
    getCalendarData()
  }, [year, month, date, event, isWeek])

  return (
    <>
      {loading && <Loader />}
      <CreateEvent />
      {selectedEvent && <EventDetails />}
      <SideBar />
      <Header />
      <div className='w-full h-full flex m-2 font-mono md:justify-end justify-start'>
        <div className='border-b-1 bg-gray-100 border-b-gray-200'>
          <div className=' justify-start gap-3'>
            <div className='w-10 h-20 border flex border-gray-200'></div>
            {new Array(24).fill('date').map((ele, index) => (
              <div
                key={index}
                className='w-10 h-20 border-b-1 flex border-b-gray-200 justify-center'
              >
                <small>
                  {getTime(index).time}
                  {getTime(index).format}
                </small>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-3/4 w-full h-1/2 flex overflow-auto outline-none bg-gray-100'>
          {data.length > 1
            ? data?.map((week, index) =>
                week?.map((day, w_index) => (
                  <WeekBox key={w_index} day={day} w_index={w_index} />
                ))
              )
            : data?.map((week, index) => (
                <WeekBox key={index} day={week} w_index={index} />
              ))}
        </div>
      </div>
    </>
  )
}

export default App

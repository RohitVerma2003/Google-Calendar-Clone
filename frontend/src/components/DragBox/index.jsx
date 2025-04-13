import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setSelectedBox,
  setSelectedBoxType,
  setSelectedEvent
} from '../../redux/Slices/EventSlice'
import eventColor from '../../utils/eventColor'
import getTime from '../../utils/timeFormat'

const DragBox = ({ ele, date, t_index }) => {
  const dispatch = useDispatch()
  const color = eventColor(ele.category)
  const time = getTime(new Date(ele.dateStart).getHours())

  const handleDragStart = e => {
    if (e.target.draggable) {
      console.log(e.target)
      dispatch(setSelectedBox(ele))
      dispatch(setSelectedBoxType('savedEvent'))
    }
  }
  return (
    <>
      <div
        className={`w-full h-full border-l-6 rounded-s-sm line leading-3 p-1 font-bold`}
        draggable={true}
        onDragStart={handleDragStart}
        data-date={date}
        data-start_time={t_index}
        style={{
          backgroundColor: color.bgColor,
          borderColor: color.color,
          color: color.color
        }}
        onClick={() => dispatch(setSelectedEvent(ele))}
      >
        <p>
          <small>
            {time.time}:
            {new Date(ele.dateStart).getMinutes() === 0
              ? '00'
              : new Date(ele.dateStart).getMinutes()}
            {time.format}
          </small>
        </p>
        <small>{ele.title}</small>
      </div>
    </>
  )
}

export default DragBox

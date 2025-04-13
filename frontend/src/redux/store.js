import { combineReducers, configureStore } from '@reduxjs/toolkit'
import calendarDataSlice from './Slices/CalendarDataSlice'
import eventSlice from './Slices/EventSlice'
import goalsAndTasksSlice from './Slices/GoalsAndTasksSlice'

const rootReducer = combineReducers({
  calendarData: calendarDataSlice,
  eventData: eventSlice,
  goalsAndTasksSlice: goalsAndTasksSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

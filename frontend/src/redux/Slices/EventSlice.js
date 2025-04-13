import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
    name: 'eventSlice',
    initialState: {
        event: [],
        selectedBox: null,
        selectedBoxType: null,
        showCreateEvent: false,
        selectedEvent: null
    },
    reducers: {
        setEvents: (state, action) => {
            state.event = action.payload
        },
        setSelectedBox: (state, action) => {
            state.selectedBox = action.payload
        },
        setSelectedBoxType: (state, action) => {
            state.selectedBoxType = action.payload
        },
        setShowCreateEvent: (state, action) => {
            state.showCreateEvent = action.payload
        },
        setSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload
        }
    },
})

export const { setEvents, setSelectedBox, setShowCreateEvent, setSelectedEvent, setSelectedBoxType } = eventSlice.actions

export default eventSlice.reducer
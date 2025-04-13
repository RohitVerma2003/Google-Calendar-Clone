import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export const calendarDataSlice = createSlice({
    name: 'calendarDataSlice',
    initialState: {
        data: [],
        year: dayjs().year(),
        month: dayjs().month(),
        date: new Date().getDate(),
        isWeek: true,
        loading : false
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setYear: (state, action) => {
            let value = action.payload;
            if (action.payload < 1990) value = 1990
            if (action.payload > 2099) value = 2099
            state.year = value
        },
        setMonth: (state, action) => {
            state.month = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setIsWeek: (state, action) => {
            state.isWeek = action.payload
        },
        setLoading : (state , action)=>{
            state.loading = action.payload
        }
    },
})

export const { setData, setYear, setMonth, setDate, setIsWeek , setLoading } = calendarDataSlice.actions

export default calendarDataSlice.reducer
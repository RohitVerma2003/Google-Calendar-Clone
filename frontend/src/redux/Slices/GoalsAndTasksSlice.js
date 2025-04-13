import { createSlice } from '@reduxjs/toolkit'

export const goalsAndTasksSlice = createSlice({
    name: 'goalsAndTasksSlice',
    initialState: {
        goals: [],
        tasks: []
    },
    reducers: {
        setGoals: (state, action) => {
            state.goals = action.payload;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        }
    },
})

export const { setGoals, setTasks } = goalsAndTasksSlice.actions

export default goalsAndTasksSlice.reducer
import { useDispatch } from "react-redux"
import { setGoals } from "../redux/Slices/GoalsAndTasksSlice";
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useGetGoals = () => {
    const dispatch = useDispatch();

    const getGoals = async () => {
        dispatch(setLoading(true))
        try {
            const res = await fetch('/api/goalsAndTasks/allGoals')
            const data = await res.json()
            console.log('fetchGoals', data)
            dispatch(setGoals(data.data))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return { getGoals }
}

export default useGetGoals;
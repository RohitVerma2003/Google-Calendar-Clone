import { useDispatch } from "react-redux"
import { setGoals, setTasks } from "../redux/Slices/GoalsAndTasksSlice";
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useGetTasks = () => {
    const dispatch = useDispatch();

    const getTasks = async (goalsId) => {
        dispatch(setLoading(true))
        try {
            const res = await fetch('/api/goalsAndTasks/allTasks', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ goalsId })
            })
            const data = await res.json()
            console.log('fetchTasks', data)
            dispatch(setTasks(data.data))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return { getTasks }
}

export default useGetTasks;
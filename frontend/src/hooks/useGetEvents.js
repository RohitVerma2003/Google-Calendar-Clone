import { useDispatch } from "react-redux"
import { setEvents } from "../redux/Slices/EventSlice";
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useGetEvents = () => {
    const dispatch = useDispatch();

    const getEvents = async () => {
        dispatch(setLoading(true))
        try {
            const res = await fetch('/api/events/all')
            const data = await res.json()
            console.log('fetchData', data)
            dispatch(setEvents(data.data))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return { getEvents }
}

export default useGetEvents;
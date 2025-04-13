import { useDispatch } from "react-redux"
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useUpdateEvent = () => {
    const dispatch = useDispatch();
    const updateEvent = async (newEvent) => {
        dispatch(setLoading(true))
        try {
            const res = await fetch('/api/events/update', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEvent)
            })
            const data = await res.json();
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return { updateEvent }
}

export default useUpdateEvent;
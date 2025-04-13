import { useDispatch } from "react-redux";
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useCreateEvent = () => {
    const dispatch = useDispatch()

    const createEvent = async (formData) => {
        dispatch(setLoading(true));
        try {
            const res = await fetch('/api/events/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false));
        }
    }

    return { createEvent }
}

export default useCreateEvent;
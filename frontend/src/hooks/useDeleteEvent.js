import { useDispatch } from "react-redux";
import { setLoading } from "../redux/Slices/CalendarDataSlice";

const useDeleteEvent = () => {
    const dispatch = useDispatch();
    const deleteEvent = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await fetch('/api/events/delete', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            })
            const data = await res.json();
        } catch (error) {
            console.log(error)
        }finally{
            dispatch(setLoading(false))
        }
    }

    return { deleteEvent }
}

export default useDeleteEvent;
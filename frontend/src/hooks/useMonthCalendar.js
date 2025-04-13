import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../redux/Slices/CalendarDataSlice"

const useMonthCalendar = () => {
    const dispatch = useDispatch()
    const { year, month, date, isWeek } = useSelector((state) => state.calendarData)

    const getCalendarData = () => {
        if (isWeek) {
            const firstDay = dayjs(new Date(year, month, 1)).day()
            let currentMon = 0 - firstDay

            const mat = new Array(5).fill([]).map(() => {
                return new Array(7).fill(null).map(() => {
                    currentMon++
                    return dayjs(new Date(year, month, currentMon))
                })
            })
            dispatch(setData(mat))
        } else {
            const mat = new Array(1).fill([]).map(() => {
                if (date && month && year) return dayjs(new Date(year, month, date))
                else return dayjs()

            })
            dispatch(setData(mat))
        }
    }

    return { getCalendarData }
}

export default useMonthCalendar
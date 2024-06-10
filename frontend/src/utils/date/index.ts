import { addMinutes, format } from 'date-fns'

export const formatDate = (
  date: string | number | Date,
  dateFormat = 'dd/MM/yyyy'
) => {
  const newDate = new Date(date)

  const timeZoneMinutes = newDate.getTimezoneOffset()

  const dateWithTZMinutes = addMinutes(newDate, timeZoneMinutes)

  return format(dateWithTZMinutes, dateFormat)
}

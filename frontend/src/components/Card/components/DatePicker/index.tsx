import { ptBR } from 'date-fns/locale/pt-BR'
import { registerLocale } from 'react-datepicker'
import RDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerProps } from './types'

registerLocale('ptBR', ptBR)

export const DatePicker = ({
  id,
  placeholder,
  value,
  onChange,
}: DatePickerProps) => {
  return (
    <RDatePicker
      id={id}
      placeholderText={placeholder}
      dateFormat="dd/MM/yyyy"
      locale="ptBR"
      selected={value}
      onChange={onChange}
      maxDate={new Date(2099, 1, 1)}
      className={`w-full rounded-sm p-1 text-sm font-normal outline-0 placeholder:text-sm placeholder:text-input-placeholder active:border-none`}
      portalId="datepicker"
    ></RDatePicker>
  )
}

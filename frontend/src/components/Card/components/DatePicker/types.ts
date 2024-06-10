export type DatePickerProps = {
  value: Date | null | undefined
  id: string
  placeholder: string
  onChange(date: Date): void
}
